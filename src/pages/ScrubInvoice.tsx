import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ScrubInvoiceForm } from '../components/scrub/InvoiceForm';
import { ScrubInvoicePreview } from '../components/scrub/InvoicePreview';
import { Invoice } from '../types/invoice';
import { Home } from 'lucide-react';

export const ScrubInvoice = () => {
  const navigate = useNavigate();
  const [currentInvoice, setCurrentInvoice] = useState<Invoice | null>(null);
  const [showPreview, setShowPreview] = useState(false);

  const handlePreview = (invoice: Invoice) => {
    setCurrentInvoice(invoice);
    setShowPreview(true);
  };

  const handleBack = () => {
    setShowPreview(false);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Home Button */}
      {!showPreview && (
        <div className="bg-emerald-600 text-white p-2">
          <button
            onClick={() => navigate('/')}
            className="flex items-center gap-1 text-sm hover:bg-emerald-700 px-2 py-1 rounded"
          >
            <Home size={16} />
            ទំព័រដើម / Home
          </button>
        </div>
      )}

      {showPreview && currentInvoice ? (
        <ScrubInvoicePreview invoice={currentInvoice} onBack={handleBack} />
      ) : (
        <ScrubInvoiceForm onPreview={handlePreview} />
      )}
    </div>
  );
};

