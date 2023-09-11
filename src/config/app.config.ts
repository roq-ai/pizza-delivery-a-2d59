interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
  ownerAbilities: string[];
  customerAbilities: string[];
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['Pizza Shop Owner'],
  customerRoles: ['Customer'],
  tenantRoles: ['Store Manager', 'Delivery Driver', 'Kitchen Staff', 'Business Owner'],
  tenantName: 'Pizza Shop',
  applicationName: 'Pizza Delivery Application',
  addOns: ['file upload', 'chat', 'notifications', 'file'],
  customerAbilities: [
    'Place an order for pizza',
    'Apply coupon codes to orders',
    'Choose from festive offers',
    'Select a meal system if available',
  ],
  ownerAbilities: [
    'Manage pizza varieties on the menu',
    'Manage staff including kitchen staff, store managers, and delivery drivers',
    'Update pizza prices',
    'Set up meal systems',
  ],
};
