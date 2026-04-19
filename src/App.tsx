import { lazy, Suspense, type ReactNode } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import BiographyPage from "./components/BiographyPage";
import BookLandingPage from "./components/BookLandingPage";
import Navbar from "./components/Navbar";
import PaintingDetail from "./components/PaintingDetail";
import PracticeGalleryPage from "./components/PracticeGalleryPage";
import PracticePaintingDetail from "./components/PracticePaintingDetail";
import SketchGalleryPage from "./components/SketchGalleryPage";
import SketchDetail from "./components/SketchDetail";
import TakhleeqGalleryPage from "./components/TakhleeqGalleryPage";
import WorksGalleryPage from "./components/WorksGalleryPage";
import ContactPage from "./components/ContactPage";
import SiteFooter from "./components/SiteFooter";

const MainContainer = lazy(() => import("./components/MainContainer"));

const MainShell = () => (
  <Suspense>
    <MainContainer />
  </Suspense>
);

const PageWithFooter = ({ children }: { children: ReactNode }) => (
  <>
    {children}
    <SiteFooter />
  </>
);

const App = () => {
  return (
    <main className="main-body">
      <Navbar />
      <Routes>
        <Route
          path="/work/:workNumber"
          element={
            <PageWithFooter>
              <PaintingDetail />
            </PageWithFooter>
          }
        />
        <Route
          path="/gallery/takhleeq"
          element={
            <PageWithFooter>
              <TakhleeqGalleryPage />
            </PageWithFooter>
          }
        />
        <Route
          path="/gallery/sketches/:slug"
          element={
            <PageWithFooter>
              <SketchDetail />
            </PageWithFooter>
          }
        />
        <Route
          path="/gallery/sketches"
          element={
            <PageWithFooter>
              <SketchGalleryPage />
            </PageWithFooter>
          }
        />
        <Route
          path="/gallery/practice-work/:slug"
          element={
            <PageWithFooter>
              <PracticePaintingDetail />
            </PageWithFooter>
          }
        />
        <Route
          path="/gallery/practice-work"
          element={
            <PageWithFooter>
              <PracticeGalleryPage />
            </PageWithFooter>
          }
        />
        <Route
          path="/gallery"
          element={
            <PageWithFooter>
              <WorksGalleryPage />
            </PageWithFooter>
          }
        />
        <Route
          path="/biography"
          element={
            <PageWithFooter>
              <BiographyPage />
            </PageWithFooter>
          }
        />
        <Route
          path="/book"
          element={
            <PageWithFooter>
              <BookLandingPage />
            </PageWithFooter>
          }
        />
        <Route
          path="/contact"
          element={
            <PageWithFooter>
              <ContactPage />
            </PageWithFooter>
          }
        />
        <Route path="*" element={<MainShell />} />
      </Routes>
    </main>
  );
};

export default App;
