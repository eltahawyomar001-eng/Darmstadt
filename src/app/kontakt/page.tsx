import { getKontaktPageContent } from '@/lib/pages';
import KontaktContent from './KontaktContent';

export default function KontaktPage() {
  const content = getKontaktPageContent();
  
  return <KontaktContent content={content} />;
}
