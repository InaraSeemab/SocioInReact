
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Page404 from './pages/404Page';
import AboutUniversityPage from './pages/AboutUniversityPage';
import AddCreditsPage from './pages/AddCreditsPage';
import AddNewCoursePage from './pages/AddNewCoursePage';
import BadgesPage from './pages/BadgesPage';
import BlogDetailPage from './pages/BlogDetailPage';
import BlogPage from './pages/BlogPage';
import BookDetailPage from './pages/BookDetailPage';
import BooksPage from './pages/BooksPage';
import ComingSoonPage from './pages/ComingSoonPage';
import CompanyHomePage from './pages/CompanyHomePage';
import CourseDetailPage from './pages/CourseDetailPage';
import CoursesPage from './pages/CoursesPage';
import DevelopmentComponentPage from './pages/DevelopmentComponentPage';
import DevelopmentElementsPage from './pages/DevelopmentElementsPage';
import EventDetailPage from './pages/EventDetailPage';
import EventPagePage from './pages/EventPagePage';
import FeedPage from './pages/FeedPage';
import ForgotPasswordPage from './pages/ForgotPasswordPage';
import GroupDetailPage from './pages/GroupDetailPage';
import GroupsPage from './pages/GroupsPage';
import HelpFaqDetailPage from './pages/HelpFaqDetailPage';
import HelpFaqPage from './pages/HelpFaqPage';
import IndexPage from './pages/IndexPage';
import InvoicePage from './pages/InvoicePage';
import LiveStreamPage from './pages/LiveStreamPage';
import LoaderSpinersPage from './pages/LoaderSpinersPage';
import MessagesPage from './pages/MessagesPage';
import NotificationsPage from './pages/NotificationsPage';
import PayOutPage from './pages/PayOutPage';
import PostDetailPage from './pages/PostDetailPage';
import PricePlanPage from './pages/PricePlanPage';
import PrivacyNPolicyPage from './pages/PrivacyNPolicyPage';
import ProductCartPage from './pages/ProductCartPage';
import ProductCheckoutPage from './pages/ProductCheckoutPage';
import ProfilePage2Page from './pages/ProfilePage2Page';
import ProfilePage from './pages/ProfilePage';
import QAPage from './pages/QAPage';
import QDetailPage from './pages/QDetailPage';
import SearchResultPage from './pages/SearchResultPage';
import SendFeedbackPage from './pages/SendFeedbackPage';
import SettingsPage from './pages/SettingsPage';
import SignInPage from './pages/SignInPage';
import SignupPage from './pages/SignupPage';
import ThankYouPage from './pages/ThankYouPage';
import VideosPage from './pages/VideosPage';
import WidgetsPage from './pages/WidgetsPage';

import PageLoader from './components/PageLoader';

export default function App() {
  React.useEffect(() => {
    const loader = document.getElementById('page-loader');
    if (loader) {
      // Small delay to ensure smooth transition
      setTimeout(() => {
        loader.style.display = 'none';
      }, 100);
    }
  }, []);

  return (
    <>
      <PageLoader />
      <BrowserRouter>

        <Routes>
          <Route path="/404" element={<Page404 />} />
          <Route path="/about-university" element={<AboutUniversityPage />} />
          <Route path="/add-credits" element={<AddCreditsPage />} />
          <Route path="/add-new-course" element={<AddNewCoursePage />} />
          <Route path="/badges" element={<BadgesPage />} />
          <Route path="/blog-detail" element={<BlogDetailPage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/book-detail" element={<BookDetailPage />} />
          <Route path="/books" element={<BooksPage />} />
          <Route path="/coming-soon" element={<ComingSoonPage />} />
          <Route path="/company-home" element={<CompanyHomePage />} />
          <Route path="/course-detail" element={<CourseDetailPage />} />
          <Route path="/courses" element={<CoursesPage />} />
          <Route path="/development-component" element={<DevelopmentComponentPage />} />
          <Route path="/development-elements" element={<DevelopmentElementsPage />} />
          <Route path="/event-detail" element={<EventDetailPage />} />
          <Route path="/event-page" element={<EventPagePage />} />
          <Route path="/feed" element={<FeedPage />} />
          <Route path="/forgot-password" element={<ForgotPasswordPage />} />
          <Route path="/group-detail" element={<GroupDetailPage />} />
          <Route path="/groups" element={<GroupsPage />} />
          <Route path="/help-faq-detail" element={<HelpFaqDetailPage />} />
          <Route path="/help-faq" element={<HelpFaqPage />} />
          <Route path="/" element={<IndexPage />} />
          <Route path="/invoice" element={<InvoicePage />} />
          <Route path="/live-stream" element={<LiveStreamPage />} />
          <Route path="/loader-spiners" element={<LoaderSpinersPage />} />
          <Route path="/messages" element={<MessagesPage />} />
          <Route path="/notifications" element={<NotificationsPage />} />
          <Route path="/pay-out" element={<PayOutPage />} />
          <Route path="/post-detail" element={<PostDetailPage />} />
          <Route path="/price-plan" element={<PricePlanPage />} />
          <Route path="/privacy-n-policy" element={<PrivacyNPolicyPage />} />
          <Route path="/product-cart" element={<ProductCartPage />} />
          <Route path="/product-checkout" element={<ProductCheckoutPage />} />
          <Route path="/profile-page2" element={<ProfilePage2Page />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/Q-A" element={<QAPage />} />
          <Route path="/Q-detail" element={<QDetailPage />} />
          <Route path="/search-result" element={<SearchResultPage />} />
          <Route path="/send-feedback" element={<SendFeedbackPage />} />
          <Route path="/settings" element={<SettingsPage />} />
          <Route path="/sign-in" element={<SignInPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/thank-you" element={<ThankYouPage />} />
          <Route path="/videos" element={<VideosPage />} />
          <Route path="/widgets" element={<WidgetsPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
