import Image from "next/image";
import { SmartLink } from "@/components/smart-link";
import { getDemoParams } from "@/lib/demo-params";

export const metadata = { title: "Chi Sono | Lumina Psicologo" };

export default async function ChiSonoPage({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const params = await getDemoParams(searchParams);
  
  const imageUrl = params.isFemale 
    ? "/Assets/psychologist-portrait-f.webp"
    : "/Assets/psychologist-portrait-m.webp";

  return (
    <div className="py-24 bg-background min-h-[calc(100vh-140px)]">
      <div className="max-w-4xl mx-auto px-6">
        <h1 className="text-secondary-foreground font-heading text-4xl md:text-5xl font-semibold mb-8 text-center">
          Chi Sono
        </h1>
        <div className="flex flex-col md:flex-row gap-12 items-start mt-12 md:mt-16">
          <div className="w-full md:w-1/3 relative aspect-[3/4] rounded-2xl overflow-hidden shadow-xl shrink-0">
            <Image
              src={imageUrl}
              alt={`Ritratto di ${params.name}`}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 33vw"
              priority
            />
          </div>
          <div className="w-full md:w-2/3 prose prose-lg prose-slate text-foreground/80">
            <h2 className="text-3xl font-medium text-primary mb-6">
              {params.name} <span className="text-foreground/50 font-normal">| {params.fieldDisplay}</span>
            </h2>
            <p className="mb-4">
              Sono Monica Milan, psicologa e specializzanda in psicoterapia sistemico familiare-individuale presso la sede di Torino della Scuola Mara Selvini Palazzoli.
            </p>
            <p className="mb-4">
              Offro uno spazio di ascolto autentico e rispettoso ad adolescenti e adulti, e accompagno coppie e famiglie nei momenti di crisi o trasformazione. La mia esperienza nei servizi territoriali e nei centri antiviolenza mi ha insegnato quanto sia importante restituire dignità, voce e potere personale a chi attraversa situazioni di vulnerabilità.
            </p>
            <p className="mb-4 font-medium text-primary">
              Se senti che è il momento di prenderti uno spazio per comprendere ciò che stai vivendo, possiamo iniziare da lì.
            </p>

            <h3 className="text-xl font-medium text-secondary-foreground mb-4 mt-8">L&apos;Approccio Sistemico-Relazionale</h3>
            <p className="mb-4">
              Il mio sguardo nasce dall&apos;approccio sistemico-relazionale: credo che la sofferenza non riguardi mai solo l&apos;individuo isolato, ma prenda forma all&apos;interno delle relazioni che abitiamo — familiari, di coppia, sociali, professionali.
            </p>
            <p className="mb-4">
              Il sintomo è un segnale. Un tentativo, spesso doloroso, di dare voce a un equilibrio che si è incrinato, a bisogni che non hanno trovato spazio, a emozioni che non hanno potuto essere riconosciute.
            </p>
            <p className="mb-8">
              La relazione terapeutica è per me uno strumento fondamentale: un luogo di collaborazione, dove terapeuta e persona co-costruiscono il percorso, passo dopo passo.
            </p>
            
            <SmartLink
              href="/contatti"
              className="inline-block bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-3 rounded-md text-lg font-medium transition-all shadow-md no-underline"
            >
              Prenota un primo colloquio
            </SmartLink>
          </div>
        </div>
      </div>
    </div>
  );
}
