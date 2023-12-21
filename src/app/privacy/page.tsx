import Layout from "@/components/layout";
import Menu from "@/components/menu";

function Index() {
  const link = (text: string, link: string) => (
    <a href={link} target="_blank" className="underline text-blue-500">
      {text}
    </a>
  );

  return (
    <Layout>
      <Menu section="privacy" />
      <div className="p-5 md:px-20 md:py-6">
        <p className="font-bold">PRIVACY POLICY</p>
        <p className="mt-4">
          This privacy notice for Kuku Diary Limited(&quot;Company,&ldquo;
          &quot;we,&ldquo; &quot;us,&ldquo; or &quot;our&ldquo;), describes how
          and why we might collect, store, use, and/or share
          (&quot;process&ldquo;) your information when you use our services
          (&quot;Services&ldquo;), such as when you:
        </p>

        <ul className="list-inside list-disc mt-3">
          <li>
            Download and use our mobile application(kuku diary),or any other
            application of ours that links to this privacy notice
          </li>
          <li>
            Engage with us in other related ways, including any sales,
            marketing, or events
          </li>
        </ul>

        <p className="mt-4">
          Questions or concerns? Reading this privacy notice will help you
          understand your privacy rights and choices. If you do not agree with
          our policies and practices, please do not use our Services. If you
          still have any questions or concerns, please contact us at
          kukudiary@gmail.com.
        </p>

        <p className="font-bold mt-6">1. WHAT INFORMATION DO WE COLLECT? </p>
        <p className="font-bold mt-2">
          Personal information you disclose to us
        </p>
        <p className="italic mt-2">
          In Short: We collect personal information that you provide to us.
        </p>
        <p className="mt-2">
          We collect personal information that you voluntarily provide to us
          when you register on the Services, express an interest in obtaining
          information about us or our products and Services, when you
          participate in activities on the Services, or otherwise when you
          contact us.
        </p>
        <p className="mt-2">
          Personal Information Provided by You. The personal information that we
          collect depends on the context of your interactions with us and the
          Services, the choices you make, and the products and features you use.
          The personal information we collect may include the following:
        </p>
        <ul className="list-inside list-disc mt-3">
          <li>phone numbers</li>
          <li>names</li>
          <li>email addresses</li>
          <li>usernames</li>
          <li>passwords</li>
          <li>billing addresses</li>
          <li>debit/credit card numbers</li>
        </ul>

        <p className="mt-3">
          Sensitive Information. We do not process sensitive information.{" "}
        </p>

        <p className="mt-4">
          <span className="font-bold">Payment Data.</span> We may collect data
          necessary to process your payment if you make purchases, such as your
          payment instrument number (such as a credit card number), and the
          security code associated with your payment instrument. All payment
          data is stored by{" "}
          {link(
            "mpesa",
            "https://vodacom.co.tz/public/assets/files/M-PESA%20Customer%20Privacy%20Statement%20vr1%20English%20FCC%20approved%202020.pdf"
          )}
          , {link("tigopesa", "https://www.tigo.co.tz/privacy-policy")},{" "}
          {link("airtelmoney", "https://www.airtel.in/privacy-policy")} and{" "}
          {link("halopesa", "https://halotel.co.tz/halopesa/privacy-policy")}.
        </p>

        <p className="mt-4">
          <span className="font-bold">Social Media Login Data</span>. We may
          provide you with the option to register with us using your existing
          social media account details, like your Facebook, Twitter, or other
          social media account. If you choose to register in this way, we will
          collect the information described in the section called &quot;HOW DO
          WE HANDLE YOUR SOCIAL LOGINS?&ldquo; below.
        </p>

        <p>
          <span className="font-bold">Application Data</span>.If you use our
          application(s), we also may collect the following information if you
          choose to provide us with access or permission:
        </p>
        <ul className="list-inside list-disc mt-3">
          <li>
            Mobile Device Access. We may request access or permission to certain
            features from your mobile device, including your mobile
            device&ldquo;s calendar, reminders, sms messages, storage, and other
            features. If you wish to change our access or permissions, you may
            do so in your device&ldquo;s settings.
          </li>
          <li>
            Push Notifications. We may request to send you push notifications
            regarding your account or certain features of the application(s). If
            you wish to opt out from receiving these types of communications,
            you may turn them off in your device&ldquo;s settings.
          </li>
        </ul>

        <p className="mt-4">
          This information is primarily needed to maintain the security and
          operation of our application(s), for troubleshooting, and for our
          internal analytics and reporting purposes.
        </p>

        <p className="mt-4">
          All personal information that you provide to us must be true,
          complete, and accurate, and you must notify us of any changes to such
          personal information.
        </p>

        <p className="font-bold mt-2">Information automatically collected</p>

        <p className="mt-2">
          In Short: Some information — such as your Internet Protocol (IP)
          address and/or browser and device characteristics — is collected
          automatically when you visit our Services.
        </p>

        <p className="mt-2">
          We automatically collect certain information when you visit, use, or
          navigate the Services. This information does not reveal your specific
          identity (like your name or contact information) but may include
          device and usage information, such as your IP address, browser and
          device characteristics, operating system, language preferences,
          referring URLs, device name, country, location, information about how
          and when you use our Services, and other technical information. This
          information is primarily needed to maintain the security and operation
          of our Services, and for our internal analytics and reporting
          purposes.
          <br />
          <br />
          Like many businesses, we also collect information through cookies and
          similar technologies.
          <br />
          <br />
          The information we collect includes:
        </p>

        <ul className="list-inside list-disc mt-3">
          <li>
            Log and Usage Data. Log and usage data is service-related,
            diagnostic, usage, and performance information our servers
            automatically collect when you access or use our Services and which
            we record in log files. Depending on how you interact with us, this
            log data may include your IP address, device information, browser
            type, and settings and information about your activity in the
            Services (such as the date/time stamps associated with your usage,
            pages and files viewed, searches, and other actions you take such as
            which features you use), device event information (such as system
            activity, error reports (sometimes called &quot;crash dumps&ldquo;),
            and hardware settings).
          </li>
          <li>
            Device Data. We collect device data such as information about your
            computer, phone, tablet, or other device you use to access the
            Services. Depending on the device used, this device data may include
            information such as your IP address (or proxy server), device and
            application identification numbers, location, browser type, hardware
            model, Internet service provider and/or mobile carrier, operating
            system, and system configuration information.
          </li>
        </ul>

        <p className="font-bold mt-6">
          2. HOW DO WE PROCESS YOUR INFORMATION?{" "}
        </p>
      </div>
    </Layout>
  );
}

export default Index;
