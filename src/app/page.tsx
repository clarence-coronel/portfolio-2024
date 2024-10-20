"use client";

import LogoIcon from "@/components/icons/logo-icon";
import ScrollIcon from "@/components/icons/scroll-icon";
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
        } duration-500 opacity-0 z-40 relative max-sm:px-5 px-10`}
      >
        <div>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vel, quasi
          corporis libero officia atque ratione hic nisi alias inventore
          laboriosam illum, dolores, dolore in excepturi aliquam placeat ea sit
          consectetur. Sapiente placeat eligendi, eaque impedit eum excepturi
          dolorum a est deleniti id, inventore quibusdam obcaecati blanditiis
          omnis libero, tenetur nesciunt. Quos sint perferendis nihil
          reprehenderit, vitae explicabo consequatur temporibus necessitatibus.
          Optio impedit mollitia itaque nihil, sunt quam exercitationem
          voluptatem expedita magnam sint delectus deserunt! Blanditiis atque
          assumenda, ducimus porro, repellendus non consequuntur ad dolor
          accusamus fugit ipsam odit distinctio maiores? Totam dolor quisquam
          minima id, illo tenetur ea iure aliquid. Nisi veritatis esse commodi,
          accusamus laborum quam impedit. Similique soluta, culpa magnam unde
          ipsam nobis modi aspernatur perspiciatis repellendus ex! Eos modi a
          recusandae mollitia tenetur maxime ratione hic pariatur, omnis ipsam
          deserunt numquam incidunt quam dicta reiciendis non cumque? Rem
          ducimus, aspernatur ipsa accusantium dolorum esse ab suscipit
          delectus. Adipisci quaerat totam ut tempore ex! Repudiandae quisquam
          ex asperiores laudantium numquam delectus tempora neque eos facilis,
          porro excepturi tenetur, nesciunt magnam quas quidem dolorem assumenda
          temporibus, et voluptate dignissimos. Eaque aut, optio sequi, magni
          aperiam, libero quos neque distinctio error quasi accusantium. Ad
          suscipit incidunt ratione minus tempora fugit praesentium non maiores?
          Nemo molestias quisquam repudiandae est quis minima. Beatae nulla,
          doloribus voluptates ratione esse a explicabo accusamus accusantium
          perferendis, incidunt debitis voluptas. Enim cum, inventore doloremque
          nostrum quis hic exercitationem libero debitis dolor quidem numquam!
          Temporibus, libero in. Voluptatum, iusto earum! Exercitationem optio
          ipsam dolores tempora dignissimos eaque maiores iure cumque! Sunt
          voluptatem, aliquid atque officiis, doloremque temporibus id sapiente,
          quibusdam non perspiciatis quis aperiam aliquam veritatis eligendi.
          Ducimus, quaerat aliquam? Aut assumenda, id itaque vel, quisquam natus
          eveniet pariatur laborum accusamus quas fugit quo commodi eos tempora
          dolores eaque voluptates, numquam quasi blanditiis. Fugiat autem
          minima fugit? Molestiae laboriosam eaque esse rerum similique dolor
          voluptatibus eum doloremque suscipit tenetur officia, accusamus itaque
          reiciendis temporibus commodi nobis velit et porro, quaerat optio
          laudantium eius voluptatum. Laudantium, accusantium molestiae? Iste ea
          ullam tempore vitae exercitationem commodi nobis culpa voluptatibus
          ipsam voluptatum possimus impedit pariatur eligendi accusamus
          molestias, incidunt recusandae officiis modi labore fuga odit aut odio
          dolor omnis. Aliquid. Enim neque hic aperiam dolor molestias
          laudantium perferendis dolore quae dolorem, assumenda numquam quas, ad
          iusto molestiae et unde. Est recusandae saepe culpa? Deserunt
          recusandae voluptas, impedit error tempora neque. Deserunt eligendi
          minus, nihil quibusdam unde voluptatem quidem, expedita eveniet
          reprehenderit vitae debitis atque. Quia recusandae dignissimos fugiat
          eius tempora, sint exercitationem natus. Impedit rerum aut
          praesentium, omnis est molestiae! Id dolore perferendis doloribus et
          veritatis, repudiandae temporibus maxime officiis! Deserunt modi
          aliquam est nobis voluptatem neque. Voluptatibus non cumque
          perspiciatis rem minus! Omnis voluptate pariatur incidunt minima eaque
          ullam? Magni dicta doloremque rem nam odio. Sit incidunt magni est hic
          obcaecati temporibus doloremque laborum voluptates ratione,
          perspiciatis, reprehenderit harum facere! Ipsa reprehenderit, quidem
          ut sint consectetur molestias consequuntur sed? Sit tenetur commodi
          quisquam doloremque, doloribus ipsum saepe eos, quibusdam optio
          voluptas consequatur illum at temporibus dolore dolor a maiores neque
          nulla? Sunt, perspiciatis facilis autem esse neque quas nesciunt?
          Excepturi ipsam maxime dolor perspiciatis eos molestias illum,
          sapiente, adipisci temporibus cum quia. Quidem inventore repellat
          voluptas et esse ipsum provident excepturi soluta quibusdam. Unde
          voluptatem nemo nobis explicabo adipisci. Quisquam necessitatibus,
          explicabo nemo rem consequuntur expedita, esse dolorem nam minima
          tempore non itaque magnam, dolorum qui. Deleniti, minima aperiam amet
          cupiditate voluptatem ratione ab nulla inventore molestias quia est.
          Magni officia illo corporis at, accusantium tempore commodi veniam
          voluptatibus, aut distinctio quaerat nobis! Fuga ipsum doloribus
          adipisci? Veniam aspernatur necessitatibus sapiente deleniti illo
          porro, at explicabo nam consequatur sed. Doloribus non molestiae optio
          recusandae labore maiores. Voluptatum alias minima, quia suscipit
          facilis eveniet adipisci assumenda magni nisi consectetur eligendi?
          Quod ad asperiores eos. Aliquam explicabo ratione ad eos odio. Beatae
          eligendi minima ut! Illum sequi distinctio minus non, eligendi magni
          eum debitis aut perspiciatis, nulla totam necessitatibus reiciendis
          facilis dolorum eius ea pariatur aliquam repellat assumenda.
          Aspernatur, optio vel. Cumque adipisci blanditiis, nesciunt amet
          consequuntur maxime culpa sunt accusantium minus saepe repellat quasi
          sed ea unde tempore quia. Aspernatur facilis dolorem hic nobis nisi
          optio fugit repellendus blanditiis pariatur! Assumenda quo quod
          eveniet eos. Unde illo accusantium quod numquam ea eum aliquid
          corrupti? Quasi totam dignissimos quibusdam itaque dolor dolore nemo
          ab natus recusandae, consequuntur ipsa reprehenderit sunt praesentium.
          Voluptatibus exercitationem officia ullam nostrum dolor id delectus
          fuga reprehenderit eius asperiores, quos quisquam sequi quam rem porro
          quas vitae cumque voluptate incidunt! Qui nesciunt soluta in quo.
          Voluptatibus, corrupti. Quam praesentium numquam atque distinctio
          nulla ipsa, corporis incidunt repellat in, iusto explicabo sequi
          perferendis! Pariatur necessitatibus, accusamus facere natus nulla
          harum laboriosam modi odio magni adipisci officia ex quia. Rem vel,
          soluta consequatur quia dolorum voluptates, aliquam officiis totam
          ipsam nobis laboriosam quisquam et a fugiat dignissimos iusto quod
          perspiciatis placeat id quasi? Nisi libero est nulla veritatis
          placeat? Numquam quas magnam voluptates vero, dolorum placeat labore
          consequatur soluta asperiores adipisci itaque atque officia est
          pariatur inventore dicta accusantium, possimus enim tempora assumenda!
          Nulla nesciunt consectetur animi perferendis perspiciatis? Praesentium
          expedita amet ad libero, delectus repellat deserunt consequatur,
          provident architecto culpa soluta at ullam dolores, ipsam eaque
          excepturi ipsa. Cupiditate reprehenderit aut, provident dolor
          recusandae quis accusamus sed inventore. Accusantium, accusamus et
          ipsam a numquam tenetur natus! Quia assumenda aspernatur molestiae
          minima animi tempora accusantium dolorem quos expedita. Reprehenderit
          totam modi quod nesciunt! Voluptates tempora optio fugit recusandae
          possimus. Sint quaerat eius aperiam exercitationem aspernatur natus,
          neque ad nisi debitis veritatis quas quidem eum et excepturi
          voluptates qui libero vitae magni dignissimos deserunt voluptatibus.
          Tempora dolor placeat sequi voluptas. Illo mollitia incidunt odio
          dolores, esse numquam laudantium neque doloremque possimus ullam
          tenetur soluta assumenda, perspiciatis reiciendis. Ipsum, odit,
          architecto adipisci quia corrupti quos, nemo autem sint iusto quas
          iure. Et pariatur, consectetur ratione nostrum id ut ea magni earum
          enim, accusantium saepe aliquam tempore in corporis sint ipsa
          aspernatur sapiente libero animi minima. Rem quia nobis quos laborum
          nisi. Ipsa iusto quos alias quam temporibus soluta perspiciatis quod
          voluptatum fugit. Praesentium doloremque a rerum veniam fuga in, at
          ipsum est mollitia, impedit laboriosam minima optio incidunt excepturi
          earum? Ipsum! Pariatur suscipit reiciendis beatae earum esse, facilis,
          reprehenderit aliquam ipsa quidem quis minima voluptatum perferendis
          sed illo? Eveniet nemo animi eos quia ipsum quasi! Cupiditate aut
          suscipit facere optio eos! Obcaecati velit in ex repellat numquam.
          Laborum repellat adipisci distinctio fugiat natus quaerat neque,
          placeat praesentium repudiandae ipsa amet rem ratione debitis
          perferendis quod tempora aspernatur deserunt quis nostrum doloribus.
          Hic dignissimos repellat earum in sapiente optio sequi magnam
          molestiae libero minus! Quam sit architecto ducimus assumenda quaerat
          cupiditate aspernatur fuga quibusdam, corporis quisquam asperiores
          numquam, odit commodi ipsum cum. Dicta quod cum, repudiandae eligendi
          optio, eos beatae doloremque nisi mollitia, sequi possimus distinctio
          necessitatibus veritatis tempora velit sunt quasi neque? Voluptate ea
          doloremque magni, asperiores aperiam nam atque quibusdam! Ab numquam
          voluptatibus eveniet? Quibusdam, possimus iure vero aliquam earum
          deserunt explicabo, dolorum nulla dolor consectetur delectus
          dignissimos sequi, saepe libero optio dolore obcaecati dicta voluptate
          reiciendis eius vitae! Magnam. Modi architecto, veritatis ipsa officia
          ad officiis cupiditate hic fuga cum odit nemo ab, nulla quasi. In
          corrupti voluptas mollitia sed quo necessitatibus. Ex beatae aperiam
          commodi laboriosam dolorum. Quaerat.
        </div>
      </div>
    </div>
  );
}
