"use client";

import LogoIcon from "@/components/icons/logo-icon";
import ScrollIcon from "@/components/icons/scroll-icon";
import Section from "@/components/section/section";
import HighlightText from "@/components/ui/highlight-text";
import useScroll from "@/hooks/useScroll";

export default function Home() {
  const scrolled = useScroll();

  return (
    <div>
      <div>
        <div
          className={`${
            scrolled ? "landing-page-text-exit" : "landing-page-text-intro"
          } gap-10 relative pb-28 max-md:pb-48 flex flex-col justify-between items-center h-screen py-[30vh]`}
        >
          <div className="max-lg:gap-8 max-md:gap-5 max-sm:gap-3 flex flex-col justify-center items-center gap-10 ">
            <h2 className="max-md:text-xl max-xl:text-2xl font-semibold text-3xl tracking-[0.25em] text-center">
              <HighlightText>C</HighlightText>LARENCE{" "}
              <HighlightText>C</HighlightText>ORONEL
            </h2>
            <h1 className="tracking-tighter max-md:text-3xl max-xl:text-5xl font-bold text-6xl max-w-[900px] text-balance text-center">
              {`<Full-stack Developer `}
              <HighlightText>experience=&quot;Junior&quot;</HighlightText>{" "}
              <HighlightText>
                passionate={`{`}true{`}`}
              </HighlightText>{" "}
              {" />"}
            </h1>
          </div>
          <div className="max-md:hidden">
            <ScrollIcon size={70} innerColor="var(--foreground)" />
          </div>
          <div className="md:hidden">
            <ScrollIcon size={40} innerColor="var(--foreground)" />
          </div>
        </div>
        <div
          className={`${
            scrolled ? "landing-page-bg-exit" : "landing-page-bg-intro"
          } fixed left-0 top-0 max-md:hidden -z-10`}
        >
          <LogoIcon innerColor="var(--primary)" type="bg1" />
        </div>
      </div>
      <div
        className={`${
          scrolled && "opacity-100"
        } duration-1000 opacity-0 z-40 relative max-sm:px-5 max-md:px-16 px-40`}
      >
        <Section name="About" id="about">
          <div>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vel, quasi
            corporis libero officia atque ratione hic nisi alias inventore
            laboriosam illum, dolores, dolore in excepturi aliquam placeat ea
            sit consectetur. Sapiente placeat eligendi, eaque impedit eum
            excepturi dolorum a est deleniti id, inventore quibusdam obcaecati
            blanditiis omnis libero, tenetur nesciunt. Quos sint perferendis
            nihil reprehenderit, vitae explicabo consequatur temporibus
            necessitatibus. Optio impedit mollitia itaque nihil, sunt quam
            exercitationem voluptatem expedita magnam sint delectus deserunt!
            Blanditiis atque assumenda, ducimus porro, repellendus non
            consequuntur ad dolor accusamus fugit ipsam odit distinctio maiores?
            Totam dolor quisquam minima id, illo tenetur ea iure aliquid. Nisi
            veritatis esse commodi, accusamus laborum quam impedit. Similique
            soluta, culpa magnam unde ipsam nobis modi aspernatur perspiciatis
            repellendus ex! Eos modi a recusandae mollitia tenetur maxime
            ratione hic pariatur, omnis ipsam deserunt numquam incidunt quam
            dicta reiciendis non cumque? Rem ducimus, aspernatur ipsa
            accusantium dolorum esse ab suscipit delectus. Adipisci quaerat
            totam ut tempore ex! Repudiandae quisquam ex asperiores laudantium
            numquam delectus tempora neque eos facilis, porro excepturi tenetur,
            nesciunt magnam quas quidem dolorem assumenda temporibus, et
            voluptate dignissimos. Eaque aut, optio sequi, magni aperiam, libero
            quos neque distinctio error quasi accusantium. Ad suscipit incidunt
            ratione minus tempora fugit praesentium non maiores? Nemo molestias
            quisquam repudiandae est quis minima. Beatae nulla, doloribus
            voluptates ratione esse a explicabo accusamus accusantium
            perferendis, incidunt debitis voluptas. Enim cum, inventore
            doloremque nostrum quis hic exercitationem libero debitis dolor
            quidem numquam! Temporibus, libero in. Voluptatum, iusto earum!
            Exercitationem optio ipsam dolores tempora dignissimos eaque maiores
            iure cumque! Sunt voluptatem, aliquid atque officiis, doloremque
            temporibus id sapiente, quibusdam non perspiciatis quis aperiam
            aliquam veritatis eligendi. Ducimus, quaerat aliquam? Aut assumenda,
            id itaque vel, quisquam natus eveniet pariatur laborum accusamus
          </div>
        </Section>
      </div>
    </div>
  );
}
