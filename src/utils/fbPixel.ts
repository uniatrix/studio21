// Facebook Pixel utility functions
declare global {
  interface Window {
    fbq: any;
  }
}

export const trackInitiateCheckout = (value?: number, currency: string = 'USD') => {
  if (typeof window !== 'undefined' && window.fbq) {
    window.fbq('track', 'InitiateCheckout', {
      value: value,
      currency: currency,
      content_name: 'Studio21 Digital Product Vault',
      content_category: 'Digital Products',
      content_ids: ['studio21-vault'],
      content_type: 'product'
    });
  }
};

export const trackViewContent = (contentName: string) => {
  if (typeof window !== 'undefined' && window.fbq) {
    window.fbq('track', 'ViewContent', {
      content_name: contentName,
      content_category: 'Digital Products',
      content_ids: ['studio21-vault'],
      content_type: 'product'
    });
  }
};

export const trackLead = () => {
  if (typeof window !== 'undefined' && window.fbq) {
    window.fbq('track', 'Lead', {
      content_name: 'Studio21 Interest',
      content_category: 'Digital Products'
    });
  }
};

// Custom event for video plays
export const trackVideoPlay = () => {
  if (typeof window !== 'undefined' && window.fbq) {
    window.fbq('trackCustom', 'VideoPlay', {
      content_name: 'Studio21 Success Story Video',
      content_category: 'Video Content'
    });
  }
};