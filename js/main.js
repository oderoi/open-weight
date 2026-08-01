const COMPANY_DATA = {
  "1789 Capital": {"mission":"Investing in the builders of American technological independence and economic sovereignty.","vision":"A resurgent American industrial base powered by frontier technology and free-market innovation.","services":"Venture capital and private equity investments in AI, defense tech, and critical infrastructure.","models":""},
  "A.Team": {"mission":"Building the world's best teams on demand for the most ambitious companies.","vision":"A future where every company can instantly assemble world-class talent for any challenge.","services":"AI-powered talent matching platform; on-demand engineering and product teams.","models":""},
  "Adaption": {"mission":"Making AI systems that adapt to human needs in real time.","vision":"AI that evolves with you, not against you.","services":"Adaptive AI agents and personalization engines.","models":""},
  "Agno": {"mission":"Building lightweight, composable AI agents that developers actually want to use.","vision":"The simplest way to build and deploy AI agents at scale.","services":"Agno Agent Framework — open-source toolkit for building autonomous AI agents.","models":""},
  "AI Native Foundation": {"mission":"Promoting the development and adoption of AI-native applications and infrastructure.","vision":"A world where every application is built AI-first from the ground up.","services":"Advocacy, standards, and community for AI-native development.","models":""},
  "AI Tinkerers": {"mission":"Empowering developers to experiment, build, and ship AI-powered projects.","vision":"The largest community of hands-on AI builders and tinkerers.","services":"Community events, hackathons, and developer resources for AI experimentation.","models":""},
  "AI21": {"mission":"Making AI systems that understand and generate human language at scale.","vision":"AI that reads, writes, and reasons like a human expert.","services":"Jamba (SSM-Transformer hybrid), AI21 Studio API, Wordtune","models":"Jurassic-2, Jamba"},
  "alphaXiv": {"mission":"Making academic research accessible and actionable through AI.","vision":"Every research paper, summarized, connected, and understood by AI.","services":"AI-powered arXiv reader with paper summaries, Q&A, and citation graphs.","models":""},
  "Amazon": {"mission":"To be Earth's most customer-centric company.","vision":"To build a place where people can come to find and discover anything they might want to buy online.","services":"Amazon Bedrock, AWS Trainium, AWS Inferentia, Alexa","models":"Amazon Nova, Amazon Titan"},
  "AMD": {"mission":"To build great products that accelerate next-generation computing experiences.","vision":"High-performance and adaptive computing to solve the world's most important problems.","services":"MI300X GPU, Instinct accelerators, ROCm software stack, Ryzen AI","models":""},
  "American Innovators Network": {"mission":"Uniting American technologists, entrepreneurs, and policymakers to advance innovation.","vision":"America as the undisputed global leader in technology and innovation.","services":"Policy advocacy, networking, and thought leadership for U.S. tech innovation.","models":""},
  "AMP": {"mission":"Making the web faster and more accessible for everyone.","vision":"A web where content loads instantly on any device, anywhere.","services":"AMP (Accelerated Mobile Pages) framework, AMP Stories, AMP Email","models":""},
  "Amplitude": {"mission":"Helping companies build better products through data-driven insights.","vision":"Every product decision backed by deep user understanding.","services":"Amplitude Analytics, Amplitude Experiment, Amplitude CDP, AI-powered insights","models":""},
  "Anaconda": {"mission":"To empower data scientists and developers with the tools they need to change the world.","vision":"The most trusted platform for data science and machine learning.","services":"Anaconda Distribution, Conda package manager, Anaconda Cloud, AI/ML environment management","models":""},
  "Andreessen Horowitz": {"mission":"To support bold founders building the future through technology.","vision":"Software eating the world — and AI accelerating that transformation.","services":"Venture capital investments across AI, crypto, bio, and enterprise software.","models":""},
  "AnythingLLM": {"mission":"The easiest way to chat with your documents using any LLM, fully private.","vision":"Every person and business running their own private AI on their own data.","services":"AnythingLLM Desktop — open-source RAG application for local document Q&A.","models":""},
  "Applied Compute": {"mission":"Democratizing access to high-performance compute for AI workloads.","vision":"Affordable, scalable GPU infrastructure for every AI builder.","services":"GPU cloud infrastructure and compute orchestration platform.","models":""},
  "Arcee AI": {"mission":"Making enterprise AI that actually works in production.","vision":"Domain-specific AI models that outperform general-purpose alternatives.","services":"Arcee Enterprise AI Platform, domain-adapted LLMs, model orchestration","models":""},
  "Arena": {"mission":"Bringing transparency and rigor to AI model evaluation.","vision":"The definitive leaderboard for AI model capability and safety.","services":"Chatbot Arena (LMSYS), crowdsourced LLM evaluation and Elo rankings","models":""},
  "ARK Invest": {"mission":"Identifying disruptive innovation that will change the way the world works.","vision":"Investing in the technologies defining the next industrial revolution.","services":"ARK Innovation ETF, research on AI, robotics, genomics, and blockchain.","models":""},
  "Armada": {"mission":"Deploying AI at the edge — anywhere on Earth.","vision":"A global network of edge AI infrastructure for real-time inference.","services":"Armada Edge AI Platform, mobile data centers, satellite-connected compute","models":""},
  "Assembled": {"mission":"Building the modern workforce management platform for support teams.","vision":"AI-powered workforce optimization for every customer support operation.","services":"Assembled WFM, AI forecasting, agent scheduling, and performance analytics","models":""},
  "Atlassian": {"mission":"Unleashing the potential of every team.","vision":"The best teams work with Atlassian.","services":"Jira, Confluence, Trello, Bitbucket, Atlassian Intelligence (AI features)","models":""},
  "Atomic Chat": {"mission":"Building conversational AI that feels genuinely human.","vision":"AI chat interfaces that understand context, emotion, and intent.","services":"Atomic Chat Platform — AI-powered conversational interfaces and agents","models":""},
  "Atreides Management": {"mission":"Investing in the technologies that will define the next century.","vision":"A portfolio of companies building the infrastructure of tomorrow.","services":"Investment management focused on tech, energy, and AI infrastructure.","models":""},
  "Autohand AI": {"mission":"Automating repetitive digital tasks with intelligent AI agents.","vision":"A world where software handles the boring work so humans can create.","services":"Autohand AI automation platform for browser-based task automation","models":""},
  "Automattic": {"mission":"Making the web a better place.","vision":"Democratizing publishing and commerce through open-source software.","services":"WordPress.com, WooCommerce, Tumblr, Jetpack AI, Akismet","models":""},
  "Baseten": {"mission":"Helping ML engineers ship models to production faster.","vision":"The default platform for deploying and scaling machine learning.","services":"Baseten ML platform, model serving infrastructure, Truss framework","models":""},
  "Black Forest Labs": {"mission":"Pushing the boundaries of open generative media.","vision":"The best image and video generation models, freely available to everyone.","services":"FLUX.1 (text-to-image)","models":"FLUX.1, FLUX Pro, FLUX Dev, FLUX Schnell"},
  "BLACKBOX AI": {"mission":"Supercharging developer productivity with AI-powered coding assistance.","vision":"Every developer coding 10x faster with AI that truly understands their codebase.","services":"BLACKBOX AI Code Assistant, code completion, chat, and commit generation","models":""},
  "Block": {"mission":"Economic empowerment through accessible financial services.","vision":"A more inclusive global economy powered by technology.","services":"Cash App, Square, TIDAL, Bitkey, AI-powered financial services","models":""},
  "Bolt": {"mission":"Building the future of software development with AI.","vision":"Anyone can build full-stack apps by describing what they want.","services":"Bolt.new — AI-powered full-stack app builder and deployment platform","models":""},
  "Box": {"mission":"Powering how the world works together.","vision":"Intelligent content management that transforms how businesses operate.","services":"Box AI, Box Sign, Box Shield, intelligent document processing","models":""},
  "Bria": {"mission":"Responsible generative AI for visual content creation.","vision":"AI-generated images that are ethical, licensed, and commercially safe.","services":"Bria 2.3 (responsible image generation), Bria API, attribution engine","models":"Bria 2.3"},
  "Browserbase": {"mission":"The fastest way to run headless browsers at scale.","vision":"Reliable browser automation infrastructure for AI agents and scrapers.","services":"Browserbase headless browser API, Stagehand AI browser agent","models":""},
  "Cadence": {"mission":"Intelligent system design for the most innovative companies.","vision":"Computational software that accelerates the design of electronic systems.","services":"Cadence Cerebrus (AI-driven chip design), Allegro, Virtuoso, AWR","models":""},
  "Camber": {"mission":"Building AI infrastructure for the next generation of applications.","vision":"Seamless AI compute that scales from prototype to production.","services":"Camber AI infrastructure platform, GPU orchestration, model serving","models":""},
  "Capy": {"mission":"AI-powered tools for modern software teams.","vision":"Smarter development workflows powered by intelligent automation.","services":"Capy AI developer tools and workflow automation platform","models":""},
  "Cinder": {"mission":"Trust and safety operations for the AI era.","vision":"Making the internet safer through intelligent content moderation.","services":"Cinder Trust & Safety Platform, AI-powered content review and moderation","models":""},
  "Ciroos": {"mission":"AI-native infrastructure for modern enterprises.","vision":"The operating system for AI-powered business operations.","services":"Ciroos enterprise AI platform, workflow automation, data intelligence","models":""},
  "Cisco": {"mission":"To power an inclusive future for all.","vision":"Connecting the unconnected and securing the digital transformation.","services":"Cisco AI Defense, Cisco Security Cloud, Webex AI, networking AI","models":""},
  "Cline": {"mission":"The AI coding assistant that lives in your IDE.","vision":"Every developer with an AI pair programmer that understands their entire codebase.","services":"Cline (VS Code extension) — autonomous AI coding agent with file editing","models":""},
  "CloudBees": {"mission":"Empowering enterprises to deliver software faster and more securely.","vision":"The leading DevOps platform for continuous software delivery.","services":"CloudBees CI/CD, CloudBees Feature Management, CloudBees AI","models":""},
  "Cloudflare": {"mission":"To help build a better Internet.","vision":"A faster, more secure, and more reliable Internet for everyone.","services":"Workers AI, Vectorize, AI Gateway, R2, Pages, D1","models":""},
  "Cogensec": {"mission":"AI-powered cybersecurity for the modern threat landscape.","vision":"Autonomous security that thinks like an attacker to defend like a pro.","services":"Cogensec AI security platform, threat detection, automated response","models":""},
  "Cognition": {"mission":"Building AI software engineers that can plan, code, and deploy autonomously.","vision":"AI teammates that handle the entire software development lifecycle.","services":"Devin (AI software engineer), SWE-1.7, Cognition AI agent platform","models":""},
  "Cohere": {"mission":"Making language AI accessible to every developer and enterprise.","vision":"Enterprise-grade NLP that understands business context.","services":"Command R/R+, Coral chat interface, Cohere API","models":"Command R, Command R+, Embed, Rerank"},
  "Cohesity": {"mission":"Simplifying data management and protection for the multicloud world.","vision":"A single platform for all data security, management, and insights.","services":"Cohesity Data Cloud, Cohesity Gaia (AI search), backup and recovery","models":""},
  "Coinbase": {"mission":"Increasing economic freedom in the world.","vision":"A financial system that is open, accessible, and powered by crypto.","services":"Coinbase Exchange, Coinbase Wallet, Base L2, AI-powered fraud detection","models":""},
  "Comcast": {"mission":"To shape the future of media and technology.","vision":"Connecting people to the moments and experiences that matter most.","services":"Xfinity AI, Peacock streaming AI, Comcast AI for network optimization","models":""},
  "Command Code": {"mission":"Natural language interfaces for software development.","vision":"Code that writes itself from plain English descriptions.","services":"Command Code AI — natural language to code generation platform","models":""},
  "Composio": {"mission":"The infrastructure for AI agents to connect with any tool.","vision":"Every AI agent seamlessly integrated with every software tool.","services":"Composio tool integration platform, 100+ tool connectors for AI agents","models":""},
  "Core Automation": {"mission":"Intelligent process automation powered by AI.","vision":"Businesses running on autonomous AI agents that handle routine operations.","services":"Core Automation AI platform, RPA with LLM integration, workflow automation","models":""},
  "CoreWeave": {"mission":"Cloud infrastructure purpose-built for AI and compute-intensive workloads.","vision":"The world's most efficient GPU cloud for AI training and inference.","services":"CoreWeave Cloud (NVIDIA GPU clusters), inference endpoints, training infrastructure","models":""},
  "Corridor": {"mission":"AI-powered workflow automation for creative and technical teams.","vision":"Seamless AI integration into every creative and business workflow.","services":"Corridor AI workflow platform, content generation, process automation","models":""},
  "Corvic AI": {"mission":"Intelligent automation for enterprise operations.","vision":"AI agents that handle complex business processes end-to-end.","services":"Corvic AI enterprise automation platform, intelligent process orchestration","models":""},
  "Criteria Corp": {"mission":"Helping companies make better talent decisions through science.","vision":"Data-driven hiring that predicts job success with precision.","services":"Criteria Cognitive Aptitude Test, AI-powered talent assessment platform","models":""},
  "CrowdStrike": {"mission":"We stop breaches.","vision":"The world's most advanced cloud-native cybersecurity platform.","services":"Falcon platform, Charlotte AI, CrowdStrike Threat Graph, endpoint protection","models":""},
  "Crusoe": {"mission":"Clean, scalable compute for AI and high-performance workloads.","vision":"The world's most sustainable and cost-effective AI cloud infrastructure.","services":"Crusoe Cloud (GPU instances), Crusoe Energy (flared gas-powered data centers)","models":""},
  "DART": {"mission":"Building the programming language and tools for the modern web.","vision":"A productive, fast, and portable language for every platform.","services":"Dart programming language, Flutter framework, Dart AI/ML packages","models":""},
  "Databricks": {"mission":"To help data teams solve the world's toughest problems.","vision":"The data and AI company — unifying data, analytics, and AI on one platform.","services":"DBRX (open LLM), Databricks Mosaic AI, Unity Catalog, Delta Lake","models":"DBRX"},
  "DataRobot": {"mission":"Democratizing data science and machine learning for every enterprise.","vision":"AI that delivers measurable business value at scale.","services":"DataRobot AI Platform, AutoML, MLOps, generative AI capabilities","models":""},
  "DatologyAI": {"mission":"Better data for better AI.","vision":"The data curation layer that makes every model train faster and perform better.","services":"DatologyAI data curation platform, intelligent data selection for LLM training","models":""},
  "Daytona": {"mission":"Standardized, automated development environments for every developer.","vision":"One command to spin up a perfect dev environment, anywhere.","services":"Daytona dev environment platform, AI-powered workspace automation","models":""},
  "Defense Unicorns": {"mission":"Delivering secure, AI-powered software to the U.S. Department of Defense.","vision":"Mission-critical AI that operates securely in any environment, including air-gapped.","services":"Zarf (air-gapped package manager), Pepr (Kubernetes policy engine), AI for defense","models":""},
  "Dell Technologies": {"mission":"Driving human progress through technology.","vision":"The essential infrastructure company for the data era.","services":"Dell AI Factory, PowerEdge servers, NVIDIA AI-optimized systems, APEX cloud","models":""},
  "depthfirst": {"mission":"Deep research and analysis powered by AI.","vision":"AI that can conduct deep, structured research like a human expert.","services":"depthfirst AI research platform, automated deep-dive analysis and reporting","models":""},
  "DigitalOcean": {"mission":"Simplifying cloud computing so developers can build and scale faster.","vision":"The developer cloud — simple, affordable, and powerful.","services":"DigitalOcean Droplets, GPU Droplets, App Platform, Managed Kubernetes, Spaces","models":""},
  "Disruptive": {"mission":"Backing founders who are disrupting massive industries.","vision":"The next generation of world-changing companies, funded early.","services":"Disruptive VC — venture capital investments in AI, climate, and health tech","models":""},
  "DoorDash": {"mission":"To empower local economies by connecting people with the best of their neighborhoods.","vision":"The last-mile logistics platform for every local business.","services":"AI-powered logistics optimization, Dasher matching, demand forecasting, Storefront AI","models":""},
  "E2B": {"mission":"The infrastructure for AI agents to run code safely in the cloud.","vision":"Every AI agent executing code in secure, isolated sandboxes.","services":"E2B Sandbox — secure cloud runtime for AI agents, code execution API","models":""},
  "EdgeRunner": {"mission":"AI at the edge — fast, private, and efficient.","vision":"Intelligence that runs where data is created, not in distant data centers.","services":"EdgeRunner edge AI platform, on-device inference, edge model optimization","models":""},
  "Elastic": {"mission":"To make data usable in real time and at scale for search, observability, and security.","vision":"The search AI company — finding answers in any data, anywhere.","services":"Elasticsearch, Elastic AI Assistant, Kibana, Logstash, Beats, Elastic Security","models":""},
  "EleutherAI": {"mission":"To democratize access to large-scale AI through open research.","vision":"A world where cutting-edge AI research is freely available to everyone.","services":"The Pile dataset","models":"GPT-Neo, GPT-J, GPT-NeoX, Pythia, Polyglot"},
  "Elorian AI": {"mission":"AI companions that understand and grow with you.","vision":"Digital beings that form genuine, lasting relationships with humans.","services":"Elorian AI companion platform, personalized AI agents","models":""},
  "Emergence Capital": {"mission":"Investing in the future of enterprise work.","vision":"The best enterprise SaaS and AI companies, backed from day one.","services":"Venture capital focused on enterprise SaaS, AI, and workplace transformation","models":""},
  "Emergent": {"mission":"Building the infrastructure for emergent AI capabilities.","vision":"Systems that discover and amplify unexpected AI behaviors safely.","services":"Emergent AI research platform, capability discovery, AI safety tools","models":""},
  "Endex": {"mission":"AI-powered financial intelligence for modern investors.","vision":"Every investor with an AI analyst that never sleeps.","services":"Endex AI financial analysis platform, market intelligence, portfolio insights","models":""},
  "EOX Vantage": {"mission":"Digital transformation through intelligent automation.","vision":"Businesses operating at peak efficiency with AI-driven processes.","services":"EOX Vantage automation platform, AI-powered business process management","models":""},
  "Exia Labs": {"mission":"Building the next generation of AI research infrastructure.","vision":"Tools that accelerate AI research from idea to publication.","services":"Exia Labs AI research tools, experiment tracking, model evaluation","models":""},
  "Factory": {"mission":"AI systems that build software autonomously.","vision":"Software development fully automated by intelligent agents.","services":"Factory AI coding agents, autonomous software engineering platform","models":""},
  "Fastino Labs": {"mission":"Accelerating AI model development through better tooling.","vision":"The fastest path from research idea to deployed AI model.","services":"Fastino Labs AI development platform, model training acceleration","models":""},
  "Featherless AI": {"mission":"Lightweight AI that runs anywhere.","vision":"Powerful AI models that fit on any device, from phones to IoT.","services":"Featherless AI — ultra-efficient on-device models, edge inference optimization","models":""},
  "Fireworks AI": {"mission":"The fastest generative AI inference platform.","vision":"Production AI that responds in milliseconds, not seconds.","services":"Fireworks AI inference platform, fast LLM serving, FireAttention engine","models":""},
  "Fleet AI": {"mission":"AI-powered fleet management and logistics optimization.","vision":"Autonomous, intelligent logistics networks that never waste a mile.","services":"Fleet AI logistics platform, route optimization, predictive maintenance","models":""},
  "FriendliAI": {"mission":"Making AI deployment effortless for every developer.","vision":"The easiest way to serve AI models at scale with minimal configuration.","services":"Friendli Container, PeriFlow serving engine, AI model deployment platform","models":""},
  "General Catalyst": {"mission":"Investing in powerful, positive change that lasts.","vision":"Backing founders who are building enduring companies that transform industries.","services":"Venture capital investments across AI, healthcare, climate, and fintech","models":""},
  "Genspark": {"mission":"AI agents that research, create, and deliver complete results.","vision":"The next generation of search — not links, but complete answers and deliverables.","services":"Genspark AI agent platform, multi-agent research, autonomous content creation","models":""},
  "GitHub": {"mission":"To be the home for all developers.","vision":"The world's leading AI-powered developer platform.","services":"GitHub Copilot, Copilot Workspace, Copilot Chat, GitHub Actions, Codespaces","models":""},
  "GitLab": {"mission":"To make it so that everyone can contribute.","vision":"The most comprehensive AI-powered DevSecOps platform.","services":"GitLab Duo (AI features), CI/CD, DevSecOps platform, code review AI","models":""},
  "Glean": {"mission":"To help people find exactly what they need at work.","vision":"The AI-powered work assistant that knows everything about your company.","services":"Glean AI search, Glean Assistant, enterprise knowledge discovery platform","models":""},
  "Glemad": {"mission":"AI-powered solutions for modern business challenges.","vision":"Intelligent automation that transforms how businesses operate.","services":"Glemad AI business automation platform, intelligent workflow tools","models":""},
  "GMI Cloud": {"mission":"GPU cloud infrastructure for AI innovators.","vision":"Affordable, scalable GPU compute for every AI startup and researcher.","services":"GMI Cloud GPU instances, AI training infrastructure, inference endpoints","models":""},
  "GoDaddy": {"mission":"Empowering everyday entrepreneurs around the world.","vision":"The world's platform for small businesses to start, grow, and succeed online.","services":"GoDaddy Airo (AI website builder), domain registration, hosting, marketing tools","models":""},
  "Goodfire": {"mission":"Making AI models interpretable and steerable.","vision":"A world where we truly understand how AI models think and behave.","services":"Goodfire AI interpretability platform, model steering, feature visualization","models":""},
  "Google": {"mission":"To organize the world's information and make it universally accessible and useful.","vision":"AI that understands the world and helps people accomplish anything.","services":"Gemini 3 Pro/Flash, Bard, Vertex AI, TPUs, Google Cloud AI","models":"Gemini 3 Pro, Gemini 3 Flash, Gemma 4"},
  "GPU MODE": {"mission":"The community for GPU programming and optimization.","vision":"Democratizing high-performance GPU computing knowledge.","services":"GPU MODE community, CUDA optimization resources, kernel programming education","models":""},
  "Groq": {"mission":"The fastest AI inference in the world.","vision":"Real-time AI that responds faster than human thought.","services":"Groq LPU (Language Processing Unit), GroqCloud, ultra-fast LLM inference","models":""},
  "Harness": {"mission":"The modern software delivery platform.","vision":"Every software team shipping code with confidence and speed.","services":"Harness CI/CD, Harness AI DevOps, feature flags, chaos engineering, security","models":""},
  "Hugging Face": {"mission":"To make AI accessible to everyone through open source.","vision":"The GitHub of machine learning — where the AI community builds together.","services":"Transformers, Diffusers, Datasets, Tokenizers, Gradio, Hugging Face Hub (500K+ models)","models":""},
  "humans&": {"mission":"AI that augments human creativity and productivity.","vision":"Technology that amplifies what makes us human, not replaces it.","services":"humans& AI creative tools, human-AI collaboration platform","models":""},
  "Hyde": {"mission":"Intelligent data infrastructure for the AI era.","vision":"Data systems that self-optimize and adapt to AI workloads automatically.","services":"Hyde AI data platform, intelligent storage, AI-optimized data pipelines","models":""},
  "Hydra Host": {"mission":"GPU hosting made simple and affordable.","vision":"The easiest way to rent GPUs for AI training and inference.","services":"Hydra Host GPU rental platform, on-demand compute for AI workloads","models":""},
  "Hyland": {"mission":"Helping organizations manage their content and processes more effectively.","vision":"Intelligent content management that transforms how businesses operate.","services":"Hyland OnBase, Alfresco, intelligent document processing, AI content services","models":""},
  "Hyperbolic": {"mission":"The open-access AI cloud for researchers and developers.","vision":"Democratizing access to frontier AI compute and models.","services":"Hyperbolic AI cloud, GPU marketplace, open model inference platform","models":""},
  "IBM": {"mission":"To be the catalyst that makes the world work better.","vision":"Hybrid cloud and AI solutions that drive digital transformation.","services":"Watsonx, watsonx.ai, watsonx.data, Red Hat OpenShift AI","models":"Granite models"},
  "Inferact": {"mission":"AI-powered inference optimization for production systems.","vision":"Every AI model running at peak efficiency in production.","services":"Inferact inference optimization platform, model compression, latency reduction","models":""},
  "InferX": {"mission":"Edge AI inference at unprecedented speed.","vision":"Real-time AI that runs on any edge device with minimal power.","services":"InferX edge AI chips, FPGA-based inference acceleration","models":""},
  "Intangible": {"mission":"Protecting and monetizing intellectual property in the AI age.","vision":"A fair ecosystem where creators are compensated for AI training on their work.","services":"Intangible AI IP platform, content attribution, creator compensation","models":""},
  "Intel": {"mission":"To shape the future of technology to help create a better future for everyone.","vision":"AI everywhere — from the cloud to the edge to your device.","services":"Gaudi AI accelerators, Core Ultra (NPUs), OpenVINO, oneAPI, Intel Tiber","models":""},
  "Interconnects AI": {"mission":"AI research and analysis for the informed technologist.","vision":"Clear, deep insights into the rapidly evolving AI landscape.","services":"Interconnects AI newsletter, research, and analysis platform","models":""},
  "Isomer": {"mission":"AI for scientific discovery and molecular design.","vision":"Accelerating breakthroughs in chemistry, biology, and materials science with AI.","services":"Isomer AI scientific research platform, molecular design, drug discovery","models":""},
  "Kindo": {"mission":"AI security and governance for enterprise AI adoption.","vision":"Every enterprise deploying AI with confidence and control.","services":"Kindo AI security platform, enterprise AI governance, policy enforcement","models":""},
  "Kong": {"mission":"The cloud-native API platform for modern architectures.","vision":"Every API managed, secured, and optimized with AI-powered intelligence.","services":"Kong Gateway, Kong Mesh, Kong AI Gateway, API management and security","models":""},
  "Kyndryl": {"mission":"The world's largest provider of IT infrastructure services.","vision":"Designing, building, managing, and modernizing the technology systems the world depends on.","services":"Kyndryl Bridge, AI-powered IT operations, managed infrastructure services","models":""},
  "Lambda": {"mission":"Deep learning infrastructure for researchers and engineers.","vision":"The GPU cloud built by ML engineers, for ML engineers.","services":"Lambda Cloud (GPU instances), Lambda Labs, on-demand H100/A100 clusters","models":""},
  "LangChain": {"mission":"To make it easy to build context-aware reasoning applications.","vision":"The framework of choice for building LLM-powered applications.","services":"LangChain framework, LangGraph, LangSmith, LangServe","models":""},
  "Latitude.sh": {"mission":"Bare metal servers for AI and high-performance computing.","vision":"The simplest way to deploy powerful bare metal for any workload.","services":"Latitude.sh bare metal cloud, GPU servers, AI training infrastructure","models":""},
  "Lenovo": {"mission":"Smarter technology for all.","vision":"AI-powered devices and infrastructure for every user and enterprise.","services":"ThinkSystem AI servers, Lenovo Neptune liquid cooling, AI PCs, TruScale","models":""},
  "Letta": {"mission":"The memory layer for AI agents.","vision":"AI agents that remember, learn, and improve over time.","services":"Letta (MemGPT) — persistent memory for LLM agents, stateful AI systems","models":""},
  "Lightning AI": {"mission":"The platform for training, deploying, and building AI apps.","vision":"From research to production AI in record time.","services":"PyTorch Lightning, Lightning AI platform, model training and deployment","models":""},
  "Liquid AI": {"mission":"Next-generation AI architectures beyond transformers.","vision":"AI models that are more efficient, adaptive, and capable than anything before.","services":"state-space models","models":"Liquid Neural Networks, Liquid Foundation Models"},
  "LithosAI": {"mission":"AI for geological and mineral exploration.","vision":"Discovering critical resources faster and more sustainably with AI.","services":"LithosAI geological analysis platform, mineral exploration AI","models":""},
  "LM Studio": {"mission":"Run local LLMs on your own machine, privately.","vision":"AI that runs entirely on your device — no cloud, no data leaks.","services":"LM Studio desktop app — local LLM runner with GUI, model discovery","models":""},
  "LMSYS": {"mission":"Open research for large models and systems.","vision":"Transparent, community-driven evaluation of AI capabilities.","services":"Chatbot Arena, MT-Bench, Vicuna, FastChat, open LLM evaluation","models":""},
  "Makora": {"mission":"AI-powered creative tools for designers and artists.","vision":"Democratizing professional-grade design through intelligent automation.","services":"Makora AI design platform, generative design tools, creative automation","models":""},
  "Mariana Minerals": {"mission":"Supplying critical minerals for the AI and energy revolution.","vision":"Sustainable extraction of the materials powering next-generation technology.","services":"Critical minerals mining, rare earth elements, battery materials","models":""},
  "Megaport": {"mission":"Making cloud connectivity simple, scalable, and on-demand.","vision":"The global network that connects every cloud, data center, and enterprise.","services":"Megaport Network-as-a-Service, cloud connectivity, SDN platform","models":""},
  "Megaton AI": {"mission":"Massive-scale AI training and inference infrastructure.","vision":"The compute backbone for training the world's largest AI models.","services":"Megaton AI compute platform, large-scale distributed training","models":""},
  "Merge": {"mission":"One API to integrate with every HR, payroll, and accounting platform.","vision":"The unified API for B2B integrations.","services":"Merge API platform, unified HRIS/payroll/accounting integrations","models":""},
  "Meta": {"mission":"To give people the power to build community and bring the world closer together.","vision":"The metaverse and AI that understands and serves billions of people.","services":"Meta AI, PyTorch","models":"Llama 4, Muse Spark, Code Llama, Segment Anything"},
  "microagi": {"mission":"Tiny AI agents that handle micro-tasks autonomously.","vision":"A swarm of intelligent micro-agents handling every small task in your workflow.","services":"microagi autonomous micro-agent platform, task automation","models":""},
  "Microsoft": {"mission":"To empower every person and every organization on the planet to achieve more.","vision":"AI-powered productivity and cloud computing for every user and enterprise.","services":"Copilot, Azure OpenAI Service, GitHub Copilot, Microsoft 365 AI","models":"Phi models"},
  "Mistral": {"mission":"Pioneering open-weight AI with European excellence.","vision":"Frontier AI models that are open, efficient, and sovereign.","services":"Le Chat","models":"Mistral Large, Mistral Medium 3.5, Mistral Small 4, Codestral, Ministral"},
  "Modal": {"mission":"The serverless platform for running generative AI and data workloads.","vision":"Deploy any AI workload without managing infrastructure.","services":"Modal Labs serverless compute, GPU functions, AI model serving","models":""},
  "Morph": {"mission":"AI that understands and transforms your codebase.","vision":"Intelligent code transformation and modernization at scale.","services":"Morph AI code transformation platform, automated refactoring, code migration","models":""},
  "Mozilla": {"mission":"To ensure the Internet is a global public resource, open and accessible to all.","vision":"An internet where people, not corporations, are in control.","services":"Firefox, Mozilla AI, Llamafile (local LLM runner), trustworthy AI initiatives","models":"Llamafile"},
  "Nebius": {"mission":"AI cloud infrastructure built for the most demanding workloads.","vision":"The AI-native cloud for training and deploying frontier models.","services":"Nebius AI Cloud, GPU clusters, AI training and inference platform","models":""},
  "Neon": {"mission":"Serverless Postgres — scale to zero, scale to infinity.","vision":"The database developers actually want to use.","services":"Neon Serverless Postgres, branching, autoscaling, AI-powered database","models":""},
  "NeoSigma": {"mission":"AI for advanced manufacturing and industrial optimization.","vision":"Smart factories that self-optimize using real-time AI.","services":"NeoSigma industrial AI platform, predictive maintenance, quality control","models":""},
  "Netlify": {"mission":"To build a better web by connecting everything and everyone.","vision":"The platform for modern web development and AI-powered sites.","services":"Netlify Platform, Netlify AI, edge functions, deploy previews, headless CMS","models":""},
  "Noah Labs": {"mission":"AI research pushing the boundaries of what is possible.","vision":"Breakthrough AI capabilities through fundamental research.","services":"Noah Labs AI research, novel architectures, fundamental AI research","models":""},
  "Nokia": {"mission":"To create the technology to connect the world.","vision":"Networks that meet the massive demands of the AI era.","services":"Nokia AI for networks, 5G/6G infrastructure, network optimization AI","models":""},
  "Nolla Health": {"mission":"AI-powered healthcare that puts patients first.","vision":"Intelligent health systems that improve outcomes and reduce costs.","services":"Nolla Health AI platform, clinical decision support, patient care optimization","models":""},
  "Notion": {"mission":"To make toolmaking ubiquitous.","vision":"The all-in-one workspace where AI helps you think, write, and plan.","services":"Notion AI, Q&A, writing assistant, database automation, AI templates","models":""},
  "Nous Research": {"mission":"Open research for decentralized, democratic AI.","vision":"AI development driven by the community, not corporations.","services":"Nous Chat, open-source AI research and fine-tuning","models":"Nous-Hermes models"},
  "NVIDIA": {"mission":"To accelerate computing to solve the world's most challenging problems.","vision":"The computing platform for the age of AI.","services":"H100, H200, Blackwell GPUs, CUDA, TensorRT, NeMo, Omniverse","models":"Nemotron 3 Ultra"},
  "Ollama": {"mission":"Get up and running with large language models locally.","vision":"The easiest way to run LLMs on your own machine.","services":"Ollama — local LLM runner, model library, one-command deployment","models":""},
  "Open Athena": {"mission":"Open-source AI for defense and national security.","vision":"Democratizing access to AI tools for allied defense organizations.","services":"Open Athena open-source defense AI platform, secure AI tools","models":""},
  "Open Compute Project Foundation": {"mission":"Designing the most efficient computing infrastructure.","vision":"Open hardware designs that drive efficiency and sustainability.","services":"OCP open hardware specifications, AI-optimized server designs, data center standards","models":""},
  "Open WebUI": {"mission":"The most user-friendly interface for running LLMs locally.","vision":"Beautiful, accessible AI for everyone — self-hosted and private.","services":"Open WebUI (formerly Ollama WebUI) — self-hosted ChatGPT alternative","models":""},
  "OpenAI": {"mission":"To ensure that artificial general intelligence benefits all of humanity.","vision":"Safe AGI that solves humanity's most important problems.","services":"","models":"GPT-5, GPT-5.2, GPT-5.3-Codex, GPT-5.4, GPT-5.5, GPT-5.6, GPT-OSS, o3, o4-mini, Sora, DALL-E"},
  "OpenClaw": {"mission":"Open-source tools for AI model evaluation and safety.","vision":"Transparent, community-driven AI safety testing.","services":"OpenClaw AI evaluation framework, red-teaming tools, safety benchmarks","models":""},
  "OpenCode": {"mission":"Open-source AI coding agents for every developer.","vision":"AI pair programmers that are free, open, and customizable.","services":"OpenCode AI coding agent, open-source code generation and review","models":""},
  "Osmantic": {"mission":"AI for semantic understanding and knowledge extraction.","vision":"Machines that truly understand meaning, not just patterns.","services":"Osmantic semantic AI platform, knowledge graph extraction, meaning understanding","models":""},
  "Oumi": {"mission":"Open universal machine intelligence.","vision":"A unified platform for training, evaluating, and deploying AI models.","services":"Oumi AI platform, unified model training and evaluation framework","models":""},
  "Palantir": {"mission":"To help the world's most important institutions solve their hardest problems.","vision":"AI-powered decision-making for government and enterprise.","services":"Palantir AIP, Gotham, Foundry, Apollo, AI for defense and enterprise","models":""},
  "Palo Alto Networks": {"mission":"To be the cybersecurity partner of choice, protecting our digital way of life.","vision":"AI-powered security that stays ahead of every threat.","services":"Cortex XSIAM, Precision AI, Prisma Cloud, AI-driven threat detection","models":""},
  "Periodic Labs": {"mission":"AI for scientific research and discovery.","vision":"Accelerating breakthroughs across chemistry, physics, and biology.","services":"Periodic Labs AI research platform, scientific discovery automation","models":""},
  "Perplexity": {"mission":"To make searching for information as reliable and easy as asking a friend.","vision":"The answer engine for the age of AI.","services":"Perplexity Sonar, Perplexity API, answer engine with real-time citations","models":""},
  "Pinterest": {"mission":"To bring everyone the inspiration to create a life they love.","vision":"AI-powered visual discovery that understands your taste.","services":"Pinterest AI recommendations, visual search, content moderation AI","models":""},
  "Plastic Labs": {"mission":"AI for creative content generation and media production.","vision":"Tools that amplify human creativity through intelligent automation.","services":"Plastic Labs AI creative platform, generative media tools","models":""},
  "PlayerZero": {"mission":"AI-powered monitoring that prevents software incidents before they happen.","vision":"Self-healing software that detects and fixes issues automatically.","services":"PlayerZero AI monitoring, predictive incident prevention, root cause analysis","models":""},
  "Poolside": {"mission":"AI that codes — trained to reason about software.","vision":"The foundation model purpose-built for software engineering.","services":"Poolside coding model (Laguna S 2.1), AI for software generation","models":"Laguna S 2.1"},
  "Postman": {"mission":"To build the API-first world.","vision":"The collaboration platform for API development, testing, and AI integration.","services":"Postman API Platform, Postman Flows, API testing, AI API integration","models":""},
  "Prime Intellect": {"mission":"Decentralized AI training at massive scale.","vision":"AI models trained by the global community, not just big tech.","services":"Prime Intellect decentralized training, open compute network","models":"INTELLECT-1 model"},
  "PrismML": {"mission":"AI model evaluation and benchmarking for enterprise.","vision":"The standard for measuring AI model performance in production.","services":"PrismML evaluation platform, enterprise AI benchmarking, model comparison","models":""},
  "Rackspace Technology": {"mission":"To be the world's greatest technology services company.","vision":"Managed cloud and AI services that accelerate digital transformation.","services":"Rackspace Managed Cloud, AI/ML services, data platform management","models":""},
  "RadixArk": {"mission":"AI infrastructure for the next generation of applications.","vision":"Scalable, efficient AI compute for every builder.","services":"RadixArk AI infrastructure platform, model serving, compute orchestration","models":""},
  "Red Hat": {"mission":"To be the catalyst in communities of customers, contributors, and partners.","vision":"The open source leader in enterprise AI, cloud, and Linux.","services":"Red Hat OpenShift AI, RHEL AI, Ansible Automation Platform","models":"InstructLab"},
  "Redblock": {"mission":"AI-powered blockchain analytics and security.","vision":"Transparent, intelligent monitoring for the decentralized economy.","services":"Redblock AI blockchain analytics, smart contract security, DeFi monitoring","models":""},
  "Redis": {"mission":"To make data-intensive real-time applications faster and easier to build.","vision":"The real-time data platform for the AI era.","services":"Redis, Redis Stack, Redis AI, Redis Vector Library, real-time data platform","models":""},
  "Reducto": {"mission":"AI for document processing and data extraction.","vision":"Intelligent document understanding that eliminates manual data entry.","services":"Reducto AI document parser, intelligent data extraction, OCR + LLM pipeline","models":""},
  "Reflection": {"mission":"AI that reflects before it responds.","vision":"Language models that pause, reason, and self-correct for better answers.","services":"self-correcting LLM","models":"Reflection AI reasoning model, reflection-tuned models"},
  "Regal": {"mission":"AI-powered customer engagement for the modern enterprise.","vision":"Conversational AI that feels genuinely human across every channel.","services":"Regal.ai customer engagement platform, AI voice and chat agents","models":""},
  "Rehearsals": {"mission":"AI that helps you practice and perfect any skill.","vision":"Personal AI coaches for communication, presentations, and performance.","services":"Rehearsals AI practice platform, speech coaching, presentation feedback","models":""},
  "Reka": {"mission":"Building capable, efficient, and accessible multimodal AI.","vision":"AI that understands text, images, and video in a single unified model.","services":"Flash, Edge — multimodal LLMs with vision and video understanding","models":"Reka Core, Reka Flash, Reka Edge"},
  "Replit": {"mission":"To bring the next billion software creators online.","vision":"The world's most popular platform for building and deploying software with AI.","services":"Replit Agent, Replit AI, Ghostwriter, Replit Deployments, collaborative IDE","models":""},
  "Resemble AI": {"mission":"AI voice cloning and generation for creators and enterprises.","vision":"Every brand with a unique, customizable AI voice.","services":"Resemble AI voice cloning, real-time voice generation, voice API, local voice","models":""},
  "Ricursive Intelligence": {"mission":"Self-improving AI systems through recursive learning.","vision":"AI that gets smarter by learning from its own reasoning.","services":"Ricursive AI platform, recursive self-improvement, meta-learning systems","models":""},
  "RightNow AI": {"mission":"Instant AI answers for customer support teams.","vision":"Zero wait time support powered by intelligent AI agents.","services":"RightNow AI customer support platform, instant AI responses, ticket resolution","models":""},
  "Rillet": {"mission":"AI for financial operations and accounting automation.","vision":"Intelligent finance that runs itself.","services":"Rillet AI finance platform, automated bookkeeping, financial analysis","models":""},
  "Rogo": {"mission":"AI-powered research for financial analysts.","vision":"Every analyst with an AI research assistant that never misses a detail.","services":"Rogo AI financial research platform, document analysis, earnings call insights","models":""},
  "Runway": {"mission":"To build the next era of art, entertainment, and human creativity.","vision":"AI-powered creative tools that amplify human imagination.","services":"Runway Act-One, video generation, image generation","models":"Gen-3 Alpha, Gen-4"},
  "Sakana AI": {"mission":"Nature-inspired AI that evolves and adapts.","vision":"AI systems that grow smarter through evolutionary principles.","services":"nature-inspired model architectures","models":"Evolutionary Model Merge, Swarm AI"},
  "San Francisco Tooling Company": {"mission":"Developer tools built by developers, for developers.","vision":"The best tooling for the San Francisco tech ecosystem and beyond.","services":"Developer productivity tools, AI-assisted coding utilities","models":""},
  "SAP": {"mission":"To help the world run better and improve people's lives.","vision":"The intelligent enterprise powered by AI and cloud.","services":"Joule AI assistant, SAP AI Core, SAP BTP, intelligent ERP solutions","models":""},
  "Sapiom": {"mission":"AI for business intelligence and market analysis.","vision":"Real-time market insights powered by intelligent AI agents.","services":"Sapiom AI business intelligence platform, market research automation","models":""},
  "Scale": {"mission":"To accelerate the development of AI applications.","vision":"The data infrastructure for the AI era.","services":"Scale GenAI, Scale Donovan, Scale Data Engine, RLHF, data labeling","models":""},
  "Scarf": {"mission":"Open-source analytics for software distribution.","vision":"Every open-source project with insights into who's using it and how.","services":"Scarf analytics platform, open-source package analytics, usage insights","models":""},
  "Sculptor AI": {"mission":"AI that sculpts and refines creative content.","vision":"Intelligent creative tools that understand artistic intent.","services":"Sculptor AI creative platform, generative art and design tools","models":""},
  "Seekr": {"mission":"AI-powered search and content intelligence.","vision":"The search engine that understands what you're really looking for.","services":"Seekr AI search platform, content analysis, news intelligence, AI scoring","models":""},
  "SerpApi": {"mission":"Real-time search engine results via API.","vision":"The easiest way to get structured search data for any application.","services":"SerpApi — Google, Bing, Yahoo search results API, structured data extraction","models":""},
  "ServiceNow": {"mission":"To make the world of work, work better for everyone.","vision":"The AI platform for business transformation.","services":"Now Assist, ServiceNow AI, ITSM, workflow automation, enterprise AI agents","models":""},
  "SF Tensor": {"mission":"AI compute and infrastructure for the Bay Area tech community.","vision":"Local, accessible GPU compute for AI researchers and startups.","services":"SF Tensor GPU cloud, AI compute infrastructure, community compute sharing","models":""},
  "Siemens": {"mission":"Technology with purpose — adding real value for customers.","vision":"The industrial AI leader for manufacturing, energy, and infrastructure.","services":"Siemens Industrial AI, digital twin technology, AI for manufacturing, Xcelerator","models":""},
  "SkyPilot": {"mission":"Run LLMs and AI on any cloud — automatically.","vision":"The universal launcher for AI workloads across all clouds.","services":"SkyPilot — open-source framework for running LLMs on any cloud provider","models":""},
  "Snowflake": {"mission":"To mobilize the world's data with the Data Cloud.","vision":"The AI data cloud — where all data and AI workloads converge.","services":"Snowflake Cortex AI, Snowpark, AI/ML platform, data warehouse, Iceberg tables","models":""},
  "Socket": {"mission":"Protecting the open-source supply chain from malicious packages.","vision":"Every dependency scanned, every threat detected before it reaches production.","services":"Socket.dev security platform, open-source dependency scanning, AI threat detection","models":""},
  "Sonar": {"mission":"Clean code for the AI era.","vision":"Every codebase measured, improved, and secured with AI-powered analysis.","services":"SonarQube, SonarCloud, SonarLint, AI code quality and security analysis","models":""},
  "SpaceX": {"mission":"To make life multiplanetary.","vision":"A self-sustaining city on Mars and AI-optimized space operations.","services":"Starlink network optimization AI, autonomous docking, Starship flight software","models":""},
  "Stack Overflow": {"mission":"To help developers write the script of the future.","vision":"The world's knowledge base for coding, powered by AI.","services":"OverflowAI, Stack Overflow for Teams, AI-powered code search and answers","models":""},
  "Stacksync": {"mission":"Real-time data synchronization for modern applications.","vision":"Every database in perfect sync, automatically and reliably.","services":"Stacksync real-time sync platform, database replication, data pipeline automation","models":""},
  "Sully.ai": {"mission":"AI agents for enterprise operations and customer service.","vision":"Intelligent agents handling complex business workflows end-to-end.","services":"Sully.ai enterprise agent platform, AI workflow automation","models":""},
  "Superhuman": {"mission":"The fastest email experience ever made.","vision":"AI-powered email that lets you fly through your inbox.","services":"Superhuman AI (email writing, summarization), split inbox, read statuses","models":""},
  "Supermemory": {"mission":"AI that remembers everything for you.","vision":"Your personal AI with perfect recall of every conversation and document.","services":"Supermemory AI personal knowledge base, conversation memory, document Q&A","models":""},
  "Superserve": {"mission":"AI-powered customer service that actually serves.","vision":"Customer support so good, customers don't realize it's AI.","services":"Superserve AI customer service platform, intelligent ticketing, AI agents","models":""},
  "Sycamore": {"mission":"AI for advanced analytics and business intelligence.","vision":"Every business decision backed by AI-powered insights.","services":"Sycamore AI analytics platform, predictive analytics, business intelligence","models":""},
  "Synopsys": {"mission":"To drive innovation in the global electronics market.","vision":"AI-powered chip design that accelerates the semiconductor revolution.","services":"Synopsys.ai (AI-driven EDA), DSO.ai, VSO.ai, TSO.ai, chip design automation","models":""},
  "Telnyx": {"mission":"Communications infrastructure that doesn't suck.","vision":"The global communications platform for the AI era.","services":"Telnyx API (voice, SMS, wireless), AI-powered communications, programmable connectivity","models":""},
  "TensorWave": {"mission":"GPU cloud for AI training at the best price.","vision":"The most cost-effective way to train large AI models.","services":"TensorWave GPU cloud, AMD MI300X clusters, AI training infrastructure","models":""},
  "The Linux Foundation": {"mission":"To support the growth of Linux and collaborative software development.","vision":"The open source foundation of modern computing and AI.","services":"Linux kernel, OpenSSF, LF AI & Data, PyTorch Foundation, open-source governance","models":""},
  "Together AI": {"mission":"The fastest cloud platform for building and running generative AI.","vision":"Open, efficient, and accessible AI for every developer.","services":"Together Inference, Together Fine-tuning, Together API","models":"RedPajama, StripedHyena"},
  "Tolmo": {"mission":"AI for language learning and education.","vision":"Personalized AI tutors that adapt to every student's needs.","services":"Tolmo AI language learning platform, personalized tutoring, adaptive education","models":""},
  "TrainLoop": {"mission":"Better training loops for better AI models.","vision":"Every training run optimized for speed, cost, and model quality.","services":"TrainLoop AI training optimization platform, experiment tracking, hyperparameter tuning","models":""},
  "Trajectory": {"mission":"AI that guides businesses toward their strategic goals.","vision":"Intelligent business planning powered by predictive AI.","services":"Trajectory AI strategic planning platform, predictive analytics, goal tracking","models":""},
  "TrendAI": {"mission":"AI-powered trend detection and market intelligence.","vision":"Every business anticipating market shifts before they happen.","services":"TrendAI market intelligence platform, trend forecasting, competitive analysis","models":""},
  "Uber": {"mission":"To bring transportation — for everyone, everywhere.","vision":"AI-powered logistics and mobility for the entire planet.","services":"Michelangelo ML platform, Uber AI Labs, route optimization, demand forecasting, self-driving","models":""},
  "Uniphore": {"mission":"The AI platform for conversational automation.","vision":"Every customer interaction automated, analyzed, and improved with AI.","services":"Uniphore U-Assist, U-SelfServe, U-Analyze, AI for contact centers","models":""},
  "Unsloth": {"mission":"Making LLM fine-tuning 2x faster with 70% less memory.","vision":"The fastest way to customize large language models on consumer hardware.","services":"Unsloth — open-source LLM fine-tuning library, 2x faster training, 70% less VRAM","models":""},
  "Unusual Ventures": {"mission":"Backing bold founders from day zero.","vision":"The seed fund for technical founders building the next generation of AI companies.","services":"Unusual Ventures — seed-stage VC, founder services, technical recruiting","models":""},
  "Vercel": {"mission":"To provide the best developer experience for the web.","vision":"The platform for frontend developers to build, scale, and secure AI-powered web apps.","services":"Vercel AI SDK, v0 (AI UI generator), Next.js, Edge Functions, Turborepo","models":""},
  "Verda": {"mission":"AI for sustainable agriculture and food production.","vision":"Feeding the world through intelligent, data-driven farming.","services":"Verda AI agriculture platform, crop optimization, precision farming","models":""},
  "Vocara": {"mission":"AI-powered voice technology for enterprises.","vision":"Natural voice AI that transforms customer and employee experiences.","services":"Vocara AI voice platform, speech synthesis, voice authentication, conversational AI","models":""},
  "Webflow": {"mission":"To empower everyone to create for the web.","vision":"The visual development platform where AI helps anyone build professional websites.","services":"Webflow AI, visual CMS, e-commerce, no-code web development platform","models":""},
  "Willow": {"mission":"AI for environmental monitoring and climate intelligence.","vision":"Real-time environmental insights powered by AI and satellite data.","services":"Willow AI climate platform, environmental monitoring, carbon tracking","models":""},
  "WordPress.org": {"mission":"To democratize publishing through open source.","vision":"The world's most popular open-source content management system, AI-enhanced.","services":"WordPress CMS, Jetpack AI, Gutenberg editor, WooCommerce, open-source ecosystem","models":""},
  "Workday": {"mission":"To make work effortless.","vision":"AI-powered enterprise management for finance, HR, and planning.","services":"Workday AI, Workday Adaptive Planning, HCM, Financial Management, Skills Cloud","models":""},
  "WRITER": {"mission":"The full-stack generative AI platform for enterprises.","vision":"Every enterprise with AI that understands their brand, data, and voice.","services":"Writer AI Studio, Knowledge Graph, AI guardrails, enterprise AI","models":"Palmyra LLMs"},
  "Wrynx": {"mission":"AI for creative content and media production.","vision":"Intelligent tools that amplify creative expression across all media.","services":"Wrynx AI creative platform, generative content tools, media automation","models":""},
  "xpander.ai": {"mission":"AI agents that expand what businesses can accomplish.","vision":"Autonomous AI agents handling complex multi-step business operations.","services":"xpander.ai agent platform, multi-agent orchestration, business process automation","models":""},
  "Y Combinator": {"mission":"To help startups take off.","vision":"The world's most powerful startup accelerator, backing the next generation of AI founders.","services":"YC startup accelerator, AI batch programs, founder community, venture funding","models":""},
  "Zendesk": {"mission":"To simplify the complexity of customer experience.","vision":"AI-powered customer service that feels effortless for agents and customers.","services":"Zendesk AI, Zendesk Suite, intelligent ticketing, AI agent copilot","models":""},
  "Zoom": {"mission":"To make video communications frictionless.","vision":"AI-powered collaboration that makes every meeting more productive.","services":"Zoom AI Companion, Zoom Workplace, Zoom Clips, intelligent meeting summaries","models":""},
  "Zscaler": {"mission":"To make doing business and navigating change easier.","vision":"AI-powered zero trust security for the cloud-first enterprise.","services":"Zscaler AI, Zero Trust Exchange, cloud security, AI-driven threat protection","models":""},
};

document.addEventListener('DOMContentLoaded', () => {

    // ===== Progress Bar =====
    const progressBar = document.getElementById('progressBar');
    window.addEventListener('scroll', () => {
        const scrollTop = window.scrollY;
        const docHeight = document.documentElement.scrollHeight - window.innerHeight;
        progressBar.style.width = (scrollTop / docHeight) * 100 + '%';
    });

    // ===== Navbar scroll effect =====
    const navbar = document.getElementById('navbar');
    window.addEventListener('scroll', () => {
        navbar.classList.toggle('scrolled', window.scrollY > 50);
    });

    // ===== Mobile menu =====
    const navToggle = document.getElementById('navToggle');
    const navLinks = document.querySelector('.nav-links');
    navToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        navToggle.textContent = navLinks.classList.contains('active') ? '✕' : '☰';
    });
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
            navToggle.textContent = '☰';
        });
    });

    // ===== Counter animation =====
    const animateCounter = (el) => {
        const target = parseInt(el.dataset.target);
        const duration = 2000;
        const start = performance.now();
        const update = (now) => {
            const elapsed = now - start;
            const progress = Math.min(elapsed / duration, 1);
            const easeOut = 1 - Math.pow(1 - progress, 3);
            el.textContent = Math.floor(easeOut * target);
            if (progress < 1) requestAnimationFrame(update);
        };
        requestAnimationFrame(update);
    };

    const statsObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.querySelectorAll('.stat-num').forEach(animateCounter);
                statsObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });
    const heroStats = document.querySelector('.hero-stats');
    if (heroStats) statsObserver.observe(heroStats);

    // ===== Scroll reveal =====
    const revealElements = document.querySelectorAll('.timeline-item, .pillar-card, .big-quote');
    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                const parent = entry.target.parentElement;
                if (parent && parent.classList.contains('pillars-grid')) {
                    const siblings = Array.from(parent.children);
                    entry.target.style.transitionDelay = `${siblings.indexOf(entry.target) * 0.05}s`;
                }
                revealObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });
    revealElements.forEach(el => { el.classList.add('reveal'); revealObserver.observe(el); });

    // ===== Floating weights parallax =====
    const floatingWeights = document.querySelectorAll('.floating-weight');
    window.addEventListener('scroll', () => {
        const scrollY = window.scrollY;
        floatingWeights.forEach((weight, index) => {
            weight.style.transform = `translateY(${scrollY * (0.1 + index * 0.05)}px) rotate(${scrollY * 0.02}deg)`;
        });
    });

    // ===== Smooth scroll =====
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            if (this.id === 'modalVisit') return; // Let modal visit button navigate normally
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        });
    });

    // ===== Hero title entrance =====
    const heroTitle = document.querySelector('.hero-title');
    if (heroTitle) {
        heroTitle.style.opacity = '0';
        heroTitle.style.transform = 'translateY(30px)';
        heroTitle.style.transition = 'all 1s ease';
        setTimeout(() => { heroTitle.style.opacity = '1'; heroTitle.style.transform = 'translateY(0)'; }, 300);
    }

    // ===== Konami Code Easter Egg =====
    let konamiCode = [];
    const konamiSequence = ['ArrowUp','ArrowUp','ArrowDown','ArrowDown','ArrowLeft','ArrowRight','ArrowLeft','ArrowRight','b','a'];
    document.addEventListener('keydown', (e) => {
        konamiCode.push(e.key);
        konamiCode = konamiCode.slice(-10);
        if (konamiCode.join(',') === konamiSequence.join(',')) {
            document.body.style.filter = 'hue-rotate(180deg)';
            setTimeout(() => document.body.style.filter = '', 3000);
            const msg = document.createElement('div');
            msg.textContent = '🎉 You found the secret! Open weights for everyone!';
            msg.style.cssText = 'position:fixed;top:50%;left:50%;transform:translate(-50%,-50%);background:linear-gradient(135deg,#00d4ff,#8b5cf6);color:#0a0e27;padding:20px 40px;border-radius:16px;font-family:"Space Grotesk",sans-serif;font-weight:700;font-size:1.2rem;z-index:100000;box-shadow:0 20px 60px rgba(0,0,0,0.5);animation:popIn 0.5s ease;';
            document.body.appendChild(msg);
            setTimeout(() => { msg.style.animation = 'popOut 0.5s ease forwards'; setTimeout(() => msg.remove(), 500); }, 2500);
        }
    });

    const style = document.createElement('style');
    style.textContent = '@keyframes popIn{from{transform:translate(-50%,-50%) scale(0);opacity:0}to{transform:translate(-50%,-50%) scale(1);opacity:1}}@keyframes popOut{from{transform:translate(-50%,-50%) scale(1);opacity:1}to{transform:translate(-50%,-50%) scale(0);opacity:0}}';
    document.head.appendChild(style);

    // ===== Letter paragraph fade-in =====
    const letterParagraphs = document.querySelectorAll('.letter-body p');
    const letterObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                letterObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.2 });
    letterParagraphs.forEach((p, index) => {
        p.style.opacity = '0';
        p.style.transform = 'translateY(20px)';
        p.style.transition = `all 0.6s ease ${index * 0.1}s`;
        letterObserver.observe(p);
    });

    // ===== SIGNATORY SEARCH =====
    const sigSearch = document.getElementById('sigSearch');
    const sigCards = document.querySelectorAll('.sig-card');
    if (sigSearch) {
        sigSearch.addEventListener('input', (e) => {
            const query = e.target.value.toLowerCase().trim();
            sigCards.forEach(card => {
                const companyName = card.dataset.company.toLowerCase();
                if (companyName.includes(query)) {
                    card.classList.remove('hidden');
                } else {
                    card.classList.add('hidden');
                }
            });
        });
    }

    // ===== SIGNATORY LOGO LOADER =====
    const LOGO_SOURCES = [
        (domain) => `https://icon.horse/icon/${domain}`,
        (domain) => `https://logo.clearbit.com/${domain}?size=120`,
        (domain) => `https://www.google.com/s2/favicons?domain=${domain}&sz=128`,
    ];

    const loadedDomains = new Set();

    function loadLogoForCard(card) {
        const img = card.querySelector('.sig-logo-img');
        const fallback = card.querySelector('.sig-logo-fallback');
        const domain = card.dataset.domain;
        if (!img || !domain) return;
        if (loadedDomains.has(domain)) return;
        loadedDomains.add(domain);

        let sourceIndex = 0;
        function tryNextSource() {
            if (sourceIndex >= LOGO_SOURCES.length) {
                img.style.display = 'none';
                fallback.classList.add('visible');
                return;
            }
            const url = LOGO_SOURCES[sourceIndex](domain);
            sourceIndex++;
            const tester = new Image();
            tester.crossOrigin = 'anonymous';
            const timeout = setTimeout(() => {
                tester.src = '';
                tryNextSource();
            }, 5000);
            tester.onload = function() {
                clearTimeout(timeout);
                if (tester.width > 16 && tester.height > 16) {
                    img.src = url;
                    img.classList.add('loaded');
                    fallback.classList.remove('visible');
                } else {
                    tryNextSource();
                }
            };
            tester.onerror = function() {
                clearTimeout(timeout);
                tryNextSource();
            };
            tester.src = url;
        }
        tryNextSource();
    }

    const logoObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                loadLogoForCard(entry.target);
                logoObserver.unobserve(entry.target);
            }
        });
    }, { rootMargin: '200px 0px', threshold: 0.01 });
    document.querySelectorAll('.sig-card').forEach(card => logoObserver.observe(card));

    // ===== MODAL SYSTEM =====
    const modal = document.getElementById('companyModal');
    const modalClose = document.getElementById('modalClose');
    const modalLogo = document.getElementById('modalLogo');
    const modalFallback = document.getElementById('modalFallback');
    const modalName = document.getElementById('modalName');
    const modalDomain = document.getElementById('modalDomain');
    const modalMission = document.getElementById('modalMission');
    const modalVision = document.getElementById('modalVision');
    const modalServices = document.getElementById('modalServices');
    const modalModels = document.getElementById('modalModels');
    const modalModelsSection = document.getElementById('modalModelsSection');
    const modalVisit = document.getElementById('modalVisit');

    function openModal(card) {
        const companyName = card.dataset.company;
        const domain = card.dataset.domain;
        const abbr = card.dataset.abbr;
        const color = card.dataset.color;
        const data = COMPANY_DATA[companyName];
        if (!data) return;

        modalName.textContent = companyName;
        modalDomain.textContent = domain;
        modalMission.textContent = data.mission;
        modalVision.textContent = data.vision;
        modalServices.textContent = data.services;
        modalModels.textContent = data.models;
        if (data.models && data.models.trim() !== '') {
            modalModelsSection.style.display = 'block';
        } else {
            modalModelsSection.style.display = 'none';
        }
        modalVisit.href = `https://${domain}`;

        modalFallback.textContent = abbr;
        modalFallback.style.background = color;
        modalFallback.classList.remove('visible');
        modalLogo.style.display = 'block';
        modalLogo.src = '';
        modalLogo.style.opacity = '0';

        let srcIdx = 0;
        function tryModalLogo() {
            if (srcIdx >= LOGO_SOURCES.length) {
                modalLogo.style.display = 'none';
                modalFallback.classList.add('visible');
                return;
            }
            const url = LOGO_SOURCES[srcIdx](domain);
            srcIdx++;
            const t = new Image();
            t.onload = () => {
                if (t.width > 16 && t.height > 16) {
                    modalLogo.src = url;
                    modalLogo.style.opacity = '1';
                } else tryModalLogo();
            };
            t.onerror = () => tryModalLogo();
            t.src = url;
        }
        tryModalLogo();

        modal.classList.add('active');
        document.body.classList.add('modal-open');
    }

    function closeModal() {
        modal.classList.remove('active');
        document.body.classList.remove('modal-open');
    }

    document.querySelectorAll('.sig-card').forEach(card => {
        card.addEventListener('click', () => openModal(card));
    });

    modalClose.addEventListener('click', closeModal);
    modal.addEventListener('click', (e) => {
        if (e.target === modal) closeModal();
    });
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal.classList.contains('active')) closeModal();
    });

    // ===== Console greeting =====
    console.log('%c⚖️ Open Weights Letter', 'font-size:24px;font-weight:bold;color:#00d4ff;');
    console.log('%c235+ signatories. Built for the open-source community.', 'font-size:14px;color:#94a3b8;');
    console.log('%cTry the Konami code ↑↑↓↓←→←→BA', 'font-size:12px;color:#64748b;font-style:italic;');
});