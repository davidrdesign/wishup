import { useEffect } from 'react';

const Analytics = () => {
  useEffect(() => {
    // Example: Google Analytics (gtag)
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('config', 'GA_TRACKING_ID'); // Replace with your actual ID
    }

    // Example: Plausible
    // if (typeof window !== 'undefined' && window.plausible) {
    //   window.plausible('pageview');
    // }
  }, []);

  return null; // No UI needed
};

export default Analytics;