import HeroAbout from "@/components/modules/nosotros/sections/hero";
import HistorySection
  from "@/components/modules/nosotros/sections/history";
import MisionVision from "@/components/modules/nosotros/sections/mission-vision";
import Valores from "@/components/modules/nosotros/sections/values";
import Pilares from "@/components/modules/nosotros/sections/pillars";
import PropuestaValor from "@/components/modules/nosotros/sections/value-proposal";
import ProblemasQueResolvemos from "@/components/modules/nosotros/sections/problems";
import TerminosCondiciones from "@/components/modules/nosotros/sections/terms";

export default function NosotrosPage() {
    return (
        <main>
            <HeroAbout/>
            <HistorySection />
            <MisionVision />
            <Valores />
            <Pilares />
            <PropuestaValor />
            <ProblemasQueResolvemos />
            <TerminosCondiciones />
        </main>
    );
}