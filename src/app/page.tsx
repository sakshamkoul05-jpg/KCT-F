import {
  HomeBooks,
  HomeEvents,
  HomeHero,
  HomeLearn,
  HomePhotos,
  HomeSupport,
  HomeVaakh,
  HomeWork,
} from "@/components/homepage/home-sections"

export default function HomePage() {
  return (
    <>
      <HomeHero />
      <HomeWork />
      <HomeLearn />
      <HomeVaakh />
      <HomeBooks />
      <HomeEvents />
      <HomePhotos />
      <HomeSupport />
    </>
  )
}
