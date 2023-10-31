interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
  ownerAbilities: string[];
  customerAbilities: string[];
  getQuoteUrl: string;
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['Business Owner'],
  customerRoles: ['Guest'],
  tenantRoles: ['Business Owner', 'HR Manager', 'Payroll Administrator', 'Employee', 'Accountant'],
  tenantName: 'Company',
  applicationName: 'HR Information System',
  addOns: ['file upload', 'chat', 'notifications', 'file'],
  customerAbilities: [
    'Read company information',
    'Read user information',
    'View employee information',
    'View vacation details',
  ],
  ownerAbilities: [
    'Manage company information',
    'Manage employee data',
    'Manage vacation requests',
    'Manage payroll data',
  ],
  getQuoteUrl: 'https://app.roq.ai/proposal/8af985af-0d12-4ff1-b89e-813f0e16e2ee',
};
