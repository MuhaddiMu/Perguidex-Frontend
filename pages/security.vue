<template>
  <v-container>
    <the-blog-post :body="body" :title="title" />
  </v-container>
</template>

<script>
import TheBlogPost from '@/components/TheBlogPost.vue'
export default {
  components: { TheBlogPost },
  layout: 'Homepage',

  data() {
    return {
      //   featuredImage: '/images/blogs/about/feature.png',
      body: `
<p>
  A deep respect for our customers and their sensitive data workflows has always
  been central to our values at Perguidex. This is why we have implemented
  rigorous security policies that we continue to build upon, with every product
  release.
</p>
<h2 class="text-h4">We are Committed to Information Security and Privacy</h2>
<p>
  Perguidex maintains a comprehensive information security program that includes
  appropriate technical and organizational measures designed to protect our
  customers' cluster data against unauthorized access, modification or deletion.
</p>
<h3 class="text-h5">We isolate customers from each other</h3>
<p>
  All customers are isolated within their own Postgres database with unique and
  randomly generated credentials, secured and encrypted using Kubernetes
  Secrets. All customers are isolated inside of their own namespace within
  Kubernetes, with network policies, roles, and other security measures in place
  to ensure each tenant is truly isolated.
</p>
<h3 class="text-h5">We provide SSO access to the platform</h3>
<p>
  Workspace owners have the option to enable secure Single Sign-On access to the
  platform.
</p>
<h3 class="text-h5">We proactively monitor the service</h3>
<p>
  We regularly check our service monitoring dashboards and have alerts set up to
  notify our team if anything ever looks out of place.&nbsp;
</p>
<p>
  Unusual network patterns or suspicious behavior is monitored. Google Cloud
  Platform&rsquo;s intrusion detection and prevention systems (IDS/IPS) rely on
  both signature-based security and algorithm-based security to identify traffic
  patterns that are similar to known attack methods. IDS/IPS involves tightly
  controlling the size and make-up of the attack surface, employing intelligent
  detection controls at data entry points, and developing and deploying
  technologies that automatically remedy dangerous situations, as well as
  preventing known threats from accessing the system in the first place.&nbsp;
</p>
<p>
  Perguidex does not provide direct access to security event forensics, but does
  provide access to the engineering and customer support teams during and after
  any unscheduled downtime.
</p>
<h3 class="text-h5">We audit continuously during the development process</h3>
<p>
  Perguidex audits changes to our application throughout the development
  lifecycle via architecture reviews and stringent automated and manual code
  review processes.
</p>
<h3 class="text-h5">We've Built In Security Controls</h3>
<p>
  We've taken significant measures to ensure that Perguidex customer data cannot
  be read, copied, modified, or deleted during electronic transmission,
  transport, or storage through unauthorized means.&nbsp;
</p>
<p>
  To reduce the likelihood of vulnerability-related incidents, the Perguidex team
  deploys stances based on the latest operating system kernels, and patches the
  computing &ldquo;fleet&rdquo; whenever a critical CVE (i.e., "Common
  Vulnerability and Exposure," in security-speak) is discovered in any component
  software.&nbsp;
</p>
<p>
  Clusters are deployed behind proxies and are not visible to internet scanning.
  Transport Layer Security (TLS) encrypted communication from the Internet is
  provided in the default configuration. Perguidex nodes run in isolated
  containers, configured according to the principle of least privilege, and with
  restrictions on system calls and allowed root operations. Perguidex nodes
  communicate using TLS. Cluster data is encrypted at rest. API access is
  limited to Perguidex APIs, and no remote access to the instance or container at
  the Linux level is allowed. Containers have no means of setting up
  communication with containers from another cluster.
</p>
<p>
  We do not perform Internet-based penetration testing against production
  Perguidex offerings, however, we do use third parties to perform application
  security assessments against the Perguidex software components used to deliver
  these services.
</p>
<h3 class="text-h5">We Practice Responsible Vulnerability Management</h3>
<p>
  Perguidex recognizes that software development inherently includes the
  possibility of introducing vulnerabilities. We accept and disclose
  vulnerabilities discovered in our software in a transparent manner.
</p>
<h3 class="text-h5">We Operate in Compliance with the Principles of GDPR</h3>
<p>
  Perguidex is operating in compliance with the principles of GDPR. Perguidex
  customers are covered via the Perguidex Data Processing Addendum (DPA).
</p>
<h3 class="text-h5">Protecting Your Account</h3>
<p>
  At Perguidex, we know that security is everyone's responsibility. That's why we
  bake security into the development of our products and into the foundation of
  Perguidex Cloud. The security and privacy of your Perguidex Cloud SaaS data also
  relies on you maintaining the confidentiality of your Perguidex Cloud login
  credentials.
</p>
<p>Here's a quick checklist:</p>
<ul role="list">
  <li>Don't share your credentials with others.</li>
  <li>
    Update your account profile to make sure information is correct and current.
  </li>
  <li>Ensure that you've set secure passwords.</li>
  <li>If you believe an account has been compromised, please contact us.</li>
  <li>If you need to make an erasure request, please contact us.</li>
</ul>
<h3 class="text-h5">Our Privacy Statement is Transparent and Clear</h3>
<p>
  Perguidex respects the privacy rights of individuals. Our privacy policy makes
  it very clear when we collect personal data and how we use it. We've written
  our privacy policy in plain language to be transparent to our users and
  customers.
</p>
<h3 class="text-h5">We Operate on a Modern Cloud SaaS Platform</h3>
<p>
  We use Google Cloud Platform for our Cloud datacenter, which means our
  customers benefit from GCP's comprehensive security practices and compliance
  certifications. We do not host customer data on our premises or store customer
  data with any other third party services. GCP is a leading cloud provider that
  holds industry best security certifications such as SOC2 and ISO 27001 and
  provides encryption in transit and at rest.
</p>
<p>
  Perguidex Cloud is hosted on infrastructure that we control via<span
    >&nbsp;</span
  ><a
    href="https://cloud.google.com/kubernetes-engine/docs/concepts/security-overview"
    >GCP's Google Kubernetes Engine</a
  >, in GCP. To allow it to communicate with your systems, we run a single NAT
  that all internet bound traffic flows through. We don't persist any of your
  data, and all computation runs in short-lived containers that terminate after
  tasks are completed.
</p>
<p>
  Our cluster and databases are all hosted in a private VPC with all private
  IPs. We connect to the cluster via SSH to a bastion node set up with
  authorized networks. We use the<span>&nbsp;</span
  ><a
    href="https://cloud.google.com/kubernetes-engine/docs/concepts/security-overview#node_security"
    >GKE managed firewall rules</a
  ><span>&nbsp;</span>at the VPC layer.
</p>
<h2 class="text-h4">Physical Access Control</h2>
<p>
  Perguidex is hosted on the Google Cloud Platform. Google data centers feature a
  layered security model, including extensive safeguards such as:
</p>
<ul role="list">
  <li>Custom-designed electronic access cards</li>
  <li>Alarms</li>
  <li>Vehicle access barriers</li>
  <li>Perimeter fencing</li>
  <li>Metal detectors</li>
  <li>Biometrics</li>
</ul>
<p>
  According to the Google Security Whitepaper: &ldquo;The data center floor
  features laser beam intrusion detection. Data centers are monitored 24/7 by
  high-resolution interior and exterior cameras that can detect and track
  intruders. Access logs, activity records, and camera footage are reviewed in
  case an incident occurs. Data centers are also routinely patrolled by
  professional security guards who have undergone rigorous background checks and
  training.&rdquo;
</p>
<p>
  Perguidex employees do not have physical access to Google data centers,
  servers, network equipment, or storage.
</p>
<h2 class="text-h4">Network Access Control</h2>
<p>
  Perguidex is the assigned administrator of its infrastructure on Google Cloud
  Platform, and only designated authorized Perguidex operations team members have
  access to configure the infrastructure on an as-needed basis behind a
  two-factor authenticated virtual private network. Specific private keys are
  required for individual servers, and keys are stored in a secure and encrypted
  location.
</p>
<h2 class="text-h4">Penetration Testing</h2>
<p>
  Perguidex undergoes vulnerability assessment and penetration testing, conducted
  by an independent, third-party agency on an annual basis. For our enterprise
  level customers we're happy to provide the results of their findings and the
  mitigation we applied.
</p>
<h2 class="text-h4">Third-Party Audit</h2>
<p>
  Google Cloud Platform undergoes various third-party independent audits on a
  regular basis and can provide verification of compliance controls for its data
  centers, infrastructure, and operations. This includes, but is not limited, to
  SSAE 16-compliant SOC 2 certification and ISO 27001 certification.
</p>
<h2 class="text-h4">Business Continuity and Disaster Recovery</h2>
<h3 class="text-h5">High Availability</h3>
<p>
  Every part of the Perguidex service uses properly-provisioned, redundant
  servers (e.g., multiple load balancers, web servers, replica databases) in the
  case of failure. As part of regular maintenance, servers are taken out of
  operation without impacting availability.
</p>
<h3 class="text-h5">Business Continuity</h3>
<p>
  Perguidex keeps continuous encrypted backups of data on the Google Cloud
  Platform. While never expected, in the case of production data loss (i.e.,
  primary data stores lost), we will restore organizational data from these
  backups.
</p>
<h3 class="text-h5">Disaster Recovery</h3>
<p>
  In the event of a region-wide outage, Perguidex will bring up a duplicate
  environment in a different Google Cloud Platform region.
</p>
<h2 class="text-h4">Data transit</h2>
<h3 class="text-h5">Data into servers</h3>
<p>
  All the incoming connections towards our servers are required to be encrypted
  with industry standard SSL encryption. Latest SSL Labs report can be
  found<span>&nbsp;</span
  ><a
    href="https://www.ssllabs.com/ssltest/analyze.html?d=Perguidex.io&amp;latest"
    >here</a
  >.
</p>
<h3 class="text-h5">Data between our servers</h3>
<p>
  Connections between our servers (i.e. web servers &lt;-&gt; databases) are
  encrypted via TLS with a AES-256bit encryption method. Secrets such as
  database password, API secrets are encrypted using the same AES-256bit
  method.&lt;/-&gt;
</p>
<h3 class="text-h5">Data out of our servers</h3>
<p>
  Once the request is processed, the response is sent back using the same HTTPs
  SSL encrypted connection.
</p>
<h2 class="text-h4">Data Security and Privacy</h2>
<h3 class="text-h5">Data Encryption</h3>
<p>
  All data in Perguidex servers is automatically encrypted at rest. Google Cloud
  Platform stores and manages data cryptography keys in its redundant and
  globally distributed Key Management Service. So, if an intruder were ever able
  to access any of the physical storage devices, the Perguidex data contained
  therein would still be impossible to decrypt without the keys, rendering the
  information a useless jumble of random characters.
</p>
<p>
  Encryption at rest also enables continuity measures like backup and
  infrastructure management without compromising data security and privacy.
</p>
<p>
  Perguidex exclusively sends data over HTTPS transport layer security (TLS)
  encrypted connections for additional security as data transits to and from the
  application.
</p>
<h4>Data Retention &amp; Removal</h4>
<p>
  We do store all data for up to 6 years unless your account is deleted. In
  which case, we dispose of all data in accordance with our Terms of Service and
  Privacy Policy, within 60 days. Information regarding legal transactions
  between customers and Perguidex will be stored for up to 10 years.
</p>
<h4>Security Training</h4>
<p>
  All new employees receive onboarding and systems training, including
  environment and permissions setup, formal software development training (if
  pertinent), security policies review, company policies review, and corporate
  values and ethics training.
</p>
<p>
  All engineers review security policies as part of onboarding and are
  encouraged to review and contribute to policies via internal documentation.
  Any change to policy affecting the product is communicated as a pull request,
  such that all engineers can review and contribute before internal publication.
  Major updates are communicated via email to all employees.
</p>
<h4>Disclosure Policy</h4>
<p>
  Perguidex follows the incident handling and response process recommended by
  SANS, which includes identifying, containing, eradicating, recovering from,
  communicating, and documenting security events. Perguidex notifies customers of
  any data breaches within 2 business days via email or phone call, followed by
  periodic updates throughout, addressing progress and impact.
</p>
<h4>Systems status live report</h4>
<p>
  Perguidex maintains a live report of operational uptime and issues on our<span
    >&nbsp;</span
  ><a href="https://status.Perguidex.io/">status page</a>.&nbsp;
</p>
<h2 class="text-h4">Incident response plan</h2>
<p>
  In case of a security incident it's best to have a clearly defined plan and
  responsibilities. Below you will find more details regarding the response plan
  that Perguidex has in place in the unlikely case of a security breach.
</p>
<h2 class="text-h4">Responsibilities</h2>
<p>
  Level 1: Depending on how the incident is reported/discovered we generally
  have the first level of technical support that is likely to triage/escalate
  the issue. Normally that role is reserved for whoever is on the level 1 tech
  support shift at the time.
</p>
<p>
  Level 2: Is a senior engineer or CTO that classifies the impact of the
  security incident.&nbsp;
</p>
<p>
  Level 3: CTO or CEO is responsible for the communication with the affected
  parties regarding the details of the breach.
</p>
<h3 class="text-h5">Triage process</h3>
<p>
  Before escalating the incident to the next level, the person that first finds
  out about it needs to verify the incident and its initial impact.
</p>
<h3 class="text-h5">Escalation process</h3>
<p>
  Once verified the escalation process should be immediate to level 2 and then
  level 3 verbally, by phone, email, whatever medium available.
</p>
<h3 class="text-h5">Classification process</h3>
<p>
  Once escalated the rank/severity of the incident must be determined. Does it
  affect all customers? A single company? An individual? What type of data was
  affected if any? Was it encrypted? If so, how?
</p>
<h3 class="text-h5">Investigation process</h3>
<p>
  Analyze all elements of the incident in order to identify all the causes or
  where a failure occurred including the software, hardware, people, and
  internal processes.
</p>
<h3 class="text-h5">Lessons learned</h3>
<p>
  Based on the result of the investigation, determine what could be done to
  prevent this attack and what defensive mechanisms failed and take immediate
  action to re-mediate the cause and improve the future process.
</p>

      `,
      title: 'Security Overview'
      //   date: 'November 28, 2021'
    }
  }
}
</script>
