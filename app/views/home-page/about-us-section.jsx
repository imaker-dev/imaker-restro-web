import Image from "next/image";
import SectionHeader from "../layouts/section-header";
import PageWrapper from "@/app/components/page-wrapper";

export default function AboutUsSection() {
  return (
    <PageWrapper id="about" className="bg-primary-50">
      <div className="grid lg:grid-cols-2 gap-14 lg:gap-20 items-center">
        {/* Image */}
        <div className="order-2 lg:order-1 transition-all duration-700">
          {/* Actual Image */}
          <div className="relative rounded-2xl overflow-hidden shadow">
            <Image
              src="/Images/about.jpg" // replace with your image
              alt="ServeIQ kitchen technology"
              width={700}
              height={700}
              className="w-full h-full object-cover"
              priority
            />
          </div>
        </div>

        {/* Text */}
        <div className="order-1 lg:order-2 transition-all duration-700 delay-150">
          <SectionHeader
            badge="Our Story"
            title="Built From Inside"
            highlight=" the Kitchen"
            align="left"
          />

          <div className="space-y-4 text-base font-medium text-secondary-500 leading-relaxed">
            <p>
              <strong>iMaker Restro</strong> is developed by{" "}
              <strong>iMaker Technology Pvt. Ltd.</strong>, a technology company
              focused on building reliable and easy-to-use solutions for modern
              restaurants and food businesses.
            </p>

            <p>
              Running a restaurant involves managing orders, billing, kitchen
              operations, payments, and inventory all at the same time. iMaker
              Restro brings everything together into one simple system designed
              to make daily operations faster, more organized, and easier to
              manage.
            </p>

            <p>
              Our mission is to help restaurant owners focus on what matters
              most — delivering great food and service — while our software
              handles the technology behind the scenes.
            </p>

            <p>
              With a focus on speed, reliability, and simplicity, iMaker Restro
              helps restaurants operate efficiently and grow with confidence.
            </p>
          </div>
        </div>
      </div>
    </PageWrapper>
  );
}
