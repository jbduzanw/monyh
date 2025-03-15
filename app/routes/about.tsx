export default function About() {
  return (
    <div className="flex flex-col gap-6 size-screen">
      <h1 className="font-bold text-2xl">A propos de moi</h1>
      <div className="flex flex-col gap-4 p-4">
        <div>PHOTO</div>
        <h2 className="font-medium text-xl">Mon parcours</h2>
        <div className="px-4">
          Anthropologue de formation, je cherche à contribuer de manière
          significative à l&apos;éducation des enfants. Mon profil atypique au
          caractère pluridisciplinaires un atout dans la compréhension des
          attentes de l&apos;enfant. A l&apos;écoute, persévérante et organisée,
          donner le gout du travail au enfant est mon objectif.
        </div>
        <h3 className="font-medium text-lg">Diplomes</h3>
        <ul className="flex flex-col gap-2 px-4">
          <li className="font-medium">
            Licence Biologie avec le lien vers le site de l&apos;université de
            bordeaux
          </li>
          <li>
            <a href="https://biologie.u-bordeaux.fr/formation/licence-science-de-la-vie">
              https://biologie.u-bordeaux.fr/formation/licence-science-de-la-vie
            </a>
          </li>
          <li className="font-medium">Licence anthropologie</li>
          <li>
            <a href="https://anthropologie-sociale.u-bordeaux.fr/formations/licence-3-anthropologie-ethnologie">
              https://anthropologie-sociale.u-bordeaux.fr/formations/licence-3-anthropologie-ethnologie
            </a>
          </li>
          <li className="font-medium">Master anthropobio</li>
          <li>
            <a href="https://www.pacea.u-bordeaux.fr/master-info-2/">
              https://www.pacea.u-bordeaux.fr/master-info-2/
            </a>
          </li>
          <li className="font-medium">Master MEEF 1er degree</li>
          <li>
            <a href="https://www.inspe-bordeaux.fr/formations/professeur-des-ecoles">
              https://www.inspe-bordeaux.fr/formations/professeur-des-ecoles
            </a>
          </li>
        </ul>
        <h3 className="font-medium text-lg">Certificats</h3>
        <ul className="flex flex-col gap-2 px-4">
          <li>Delegue pharmaceutique</li>
          <li>Montessori</li>
          <li>Développement informatique</li>
        </ul>
      </div>
    </div>
  );
}
