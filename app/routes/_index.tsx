export default function Index() {
  return (
    <div className="flex flex-col size-screen items-start justify-center gap-4">
      <h1 className="font-bold text-2xl">
        Les cours particuliers : un atout pour la réussite scolaire
      </h1>
      <div className="flex flex-col gap-3 p-4">
        <div>
          Les cours particuliers offrent de nombreux avantages pour les élèves
          de tous âges. En effet, ils permettent un apprentissage personnalisé
          adapté au rythme et aux besoins de chacun.
        </div>
        <ul className="flex flex-col gap-2 list-disc px-4">
          <li>
            <b>Un suivi individualisé : </b>
            <span>
              Contrairement à la classe traditionnelle, les cours particuliers
              permettent au professeur de se concentrer sur les difficultés
              spécifiques de l&apos;élève. Il peut ainsi apporter des
              explications plus détaillées et ciblées, ce qui favorise une
              meilleure compréhension des concepts.
            </span>
          </li>
          <li>
            <b>Une progression plus rapide : </b> Grâce à un enseignement
            sur-mesure, l&apos;élève peut avancer à son propre rythme et combler
            rapidement ses lacunes. Cela renforce sa confiance en soi et le
            motive à poursuivre ses efforts.
          </li>
          <li>
            <b>Une méthode d&apos;apprentissage active : </b> Les cours
            particuliers encouragent l&apos;élève à participer activement aux
            échanges avec son professeur. Il est ainsi amené à poser des
            questions, à exprimer ses doutes et à construire ses propres
            connaissances. Lors d&apos;un cours particulier, l&apos;enseignant
            est à l&apos;écoute de l&apos;élève.
          </li>
          <li>
            <b>Une meilleure mémorisation : </b> Les exercices et les activités
            proposés lors des cours particuliers sont généralement adaptés aux
            centres d&apos;intérêt de l&apos;élève. Cela favorise une meilleure
            mémorisation des informations et une application plus concrète des
            notions apprises.
          </li>
        </ul>
      </div>
      <h1 className="font-bold text-2xl">
        Les bienfaits des cours particuliers sur le long terme
      </h1>
      <div className="flex flex-col gap-3 p-4">
        <div>
          Les bénéfices des cours particuliers ne se limitent pas à une
          amélioration des résultats scolaires à court terme. Ils peuvent
          également avoir un impact positif sur le développement personnel de
          l&apos;élève :
        </div>
        <ul className="list-disc px-4 flex flex-col gap-2">
          <li>
            <b>Développement de l&apos;autonomie : </b>
            En travaillant en étroite collaboration avec son professeur,
            l&apos;élève apprend à devenir plus autonome dans ses
            apprentissages.{" "}
            <b>Il acquiert ainsi des méthodes de travail efficaces</b>
            qui lui seront utiles tout au long de sa scolarité.
          </li>
          <li>
            <b>Amélioration de la concentration : </b>
            Les cours particuliers offrent un environnement propice à la
            concentration, sans les distractions inhérentes à une classe
            traditionnelle.
          </li>
          <li>
            <b>Renforcement de la motivation : </b>
            Les progrès rapides et visibles obtenus grâce aux cours particuliers
            renforcent la motivation de l&apos;élève et lui donnent envie de
            réussir.
          </li>
        </ul>
      </div>
    </div>
  );
}
