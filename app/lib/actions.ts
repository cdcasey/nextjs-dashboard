'use server';

export async function createInvoice(formData: FormData) {
  const rawFormData = {
    cunstomerId: formData.get('customerId'),
    amount: formData.get('amount'),
    status: formData.get('status'),
  };
  // const rawFormData = Object.fromEntries(formData.entries());
  console.log({ rawFormData });
}
