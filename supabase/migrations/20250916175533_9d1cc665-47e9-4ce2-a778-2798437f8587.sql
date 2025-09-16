-- Fix critical security issue: Make orders.user_id NOT NULL and add constraints
-- First, ensure any existing orders have proper user_id (currently table is empty)
UPDATE orders SET user_id = auth.uid() WHERE user_id IS NULL;

-- Make user_id NOT NULL to prevent orphaned orders
ALTER TABLE orders ALTER COLUMN user_id SET NOT NULL;

-- Create a trigger function to ensure user_id is always set to auth.uid()
CREATE OR REPLACE FUNCTION public.ensure_order_user_id()
RETURNS TRIGGER AS $$
BEGIN
  -- Always set user_id to the authenticated user, regardless of input
  NEW.user_id = auth.uid();
  
  -- Prevent creating orders without authentication
  IF NEW.user_id IS NULL THEN
    RAISE EXCEPTION 'Cannot create order without authentication';
  END IF;
  
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER SET search_path = public;

-- Create trigger to automatically set user_id on INSERT
CREATE TRIGGER ensure_order_user_id_trigger
  BEFORE INSERT ON orders
  FOR EACH ROW
  EXECUTE FUNCTION public.ensure_order_user_id();

-- Add constraint to ensure user_id cannot be NULL
ALTER TABLE orders ADD CONSTRAINT orders_user_id_not_null CHECK (user_id IS NOT NULL);

-- Add index for better performance on user queries
CREATE INDEX IF NOT EXISTS idx_orders_user_id ON orders(user_id);

-- Update the existing RLS policy to be more explicit
DROP POLICY IF EXISTS "Users can create orders" ON orders;
CREATE POLICY "Users can create orders" 
ON orders 
FOR INSERT 
WITH CHECK (auth.uid() IS NOT NULL AND auth.uid() = user_id);