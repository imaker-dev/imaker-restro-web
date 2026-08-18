export const FEATURES = [
  // Billing
  {
    slug: "restaurant-billing",
    isFeatured: true,
    seo: {
      title: "Restaurant Billing Software | GST POS Billing | iMaker Restro",

      description:
        "Simplify restaurant billing with a fast POS for dine-in and takeaway orders, GST billing, discounts, split payments, receipts, and real-time sales reports.",

      keywords: [
        "restaurant billing software",
        "restaurant POS billing software",
        "restaurant billing system",
        "GST billing software for restaurants",
        "restaurant billing software India",
        "dine-in billing software",
        "takeaway billing software",
        "restaurant payment management",
      ],

      canonical: "/features/restaurant-billing",
    },

    card: {
      menuTitle: "Billing",
      eyebrow: "POINT OF SALE",
      title: "Restaurant Billing",
      description:
        "Create bills, manage dine-in and takeaway orders, apply discounts and taxes, accept multiple payment methods, and keep every transaction organized in one POS.",
      image: "/Images/Pos/Billing/card-1.webp",
    },

    hero: {
      eyebrow: "RESTAURANT BILLING SOFTWARE",
      title: "Restaurant Billing That",
      highlightedTitle: "Keeps Every Order Moving",
      description:
        "Process dine-in and takeaway orders faster with a connected POS that keeps billing, taxes, discounts, payments, receipts, and daily sales organized in one place.",
      primaryCta: "Book a Free Demo",
      secondaryCta: "Watch Product Tour",
      image: "/Images/Pos/Billing/new-hero.webp",
    },

    problems: {
      eyebrow: "BUSINESS CHALLENGES",
      title: "Billing Should Support Service, Not Slow It Down",
      description:
        "Busy restaurant service leaves little room for billing errors or unnecessary steps. iMaker Restro keeps the checkout process organized while giving your team control over payments, adjustments, and billing records.",
      items: [
        {
          problem: "Busy service creates long billing queues.",
          solution:
            "Process orders and payments through a streamlined POS billing workflow.",
        },
        {
          problem: "Manual discounts and tax calculations can cause errors.",
          solution:
            "Manage discounts and tax settings directly within the billing workflow.",
        },
        {
          problem: "Different payment methods make reconciliation difficult.",
          solution:
            "Handle cash, UPI, and split payments while keeping transactions organized.",
        },
        {
          problem: "Bill changes after checkout can create control issues.",
          solution:
            "Secure post-billing item additions with employee PIN verification.",
        },
      ],
    },

    screens: [
      {
        id: "billing-screen",
        focus: "Billing",
        title: "Fast Restaurant Billing",
        description:
          "Create and manage restaurant bills from one streamlined interface, with quick access to menu items, order details, discounts, taxes, and billing controls.",
        layout: "right",
        image: "/images/features/billing/billing-screen.webp",
        highlights: [
          "Quickly search and add menu items",
          "Navigate menu categories with ease",
          "Review and update the current order",
          "Apply fixed or percentage discounts",
          "Manage applicable taxes during billing",
          "Hold and resume pending bills",
        ],
      },

      {
        id: "payment-screen",
        focus: "Checkout",
        title: "Flexible Payments, Organized Checkout",
        description:
          "Complete payments using the methods your restaurant accepts while keeping each transaction connected to its bill and payment record.",
        layout: "left",
        image: "/images/features/billing/payment-screen.webp",
        highlights: [
          "Accept cash payments at checkout",
          "Process UPI and other supported digital payments",
          "Use payment QR codes for convenient checkout",
          "Split payments across supported methods",
          "Review bills before completing payment",
          "Print actual or duplicate bills when required",
        ],
      },
    ],

    workflow: {
      eyebrow: "BILLING WORKFLOW",
      title: "From Order to Payment, Without the Extra Steps",
      steps: [
        {
          icon: "ShoppingCart",
          title: "Create Order",
          description:
            "Add menu items and build the bill for the customer's order.",
        },
        {
          icon: "Tag",
          title: "Apply Discounts",
          description:
            "Apply available fixed or percentage discounts during billing.",
        },
        {
          icon: "Receipt",
          title: "Review Bill",
          description:
            "Check items, taxes, adjustments, and the final payable amount.",
        },
        {
          icon: "CreditCard",
          title: "Accept Payment",
          description:
            "Complete payment using cash, UPI, QR, or supported split payments.",
        },
        {
          icon: "BarChart3",
          title: "Update Records",
          description:
            "Completed transactions become part of your sales and payment reports.",
        },
      ],
    },

    analytics: {
      eyebrow: "REPORTS & ANALYTICS",
      title: "Know Where Every Bill Stands",
      description:
        "Turn daily billing activity into useful business visibility with reports covering sales, payments, discounts, taxes, adjustments, dues, and more.",
      image: "/images/features/billing/analytics-dashboard.webp",
      insights: [
        {
          title: "Daily Sales",
          description: "Review sales and transaction activity across the day.",
        },
        {
          title: "Payment Reports",
          description:
            "Understand collections across different payment methods.",
        },
        {
          title: "Discount Reports",
          description: "Track discounts applied during restaurant billing.",
        },
        {
          title: "Tax Reports",
          description: "Review tax-related billing information and summaries.",
        },
        {
          title: "Due Reports",
          description: "Keep visibility into outstanding customer dues.",
        },
        {
          title: "Cancellation Reports",
          description: "Review cancelled transactions and billing activity.",
        },
      ],
    },

    faq: {
      eyebrow: "FAQs",
      title: "Frequently Asked Questions",
      questions: [
        {
          question:
            "Can I manage dine-in and takeaway billing from the same POS?",
          answer:
            "Yes. iMaker Restro supports dine-in and takeaway orders within the restaurant POS, allowing your team to manage billing from a connected workflow.",
        },
        {
          question: "Does iMaker Restro support GST and multiple tax types?",
          answer:
            "Yes. The system supports inclusive and exclusive tax settings along with multiple tax types for restaurant billing.",
        },
        {
          question: "Can I accept split payments?",
          answer:
            "Yes. iMaker Restro supports split payments across supported payment methods such as cash and UPI.",
        },
        {
          question: "Can bills be printed again after they are generated?",
          answer:
            "Yes. The billing system supports both actual and duplicate bill printing for restaurant transactions.",
        },
        {
          question: "Can a bill be changed after billing?",
          answer:
            "Post-billing item additions can be controlled through PIN-secured access, helping keep billing changes authorized.",
        },
        {
          question: "Can I track billing and payment performance?",
          answer:
            "Yes. Reports include daily sales, payments, taxes, discounts, adjustments, dues, cancellations, and other operational sales information.",
        },
      ],
    },

    cta: {
      title: "Ready to Make Restaurant Billing Simpler?",
      description:
        "Give your team a faster, more organized way to handle orders, payments, bills, and daily sales with iMaker Restro.",
      primaryCta: "Book a Free Demo",
      secondaryCta: "Talk to Our Team",
    },
  },

  // Orders
  {
    slug: "restaurant-order-management",
    isFeatured: true,
    seo: {
      title: "Restaurant Order Management Software | iMaker Restro",

      description:
        "Manage dine-in and takeaway orders with connected POS workflows for order taking, KOTs, status tracking, reorders, cancellations, discounts, and billing.",

      keywords: [
        "restaurant order management software",
        "restaurant order management system",
        "restaurant POS order management",
        "restaurant ordering software",
        "dine-in order management",
        "takeaway order management",
        "restaurant order tracking software",
        "restaurant order management India",
      ],

      canonical: "/features/restaurant-order-management",
    },

    card: {
      menuTitle: "Orders",

      eyebrow: "ORDER OPERATIONS",
      title: "Restaurant Order Management",
      description:
        "Manage dine-in and takeaway orders from one place with easy order taking, KOT generation, kitchen updates, reorders, cancellations, adjustments, and billing.",
      image: "/Images/Pos/Orders/card-1.webp",
    },

    hero: {
      eyebrow: "RESTAURANT ORDER MANAGEMENT",
      title: "Keep Every Restaurant Order",
      highlightedTitle: "Moving Without the Confusion",
      description:
        "Manage dine-in and takeaway orders through a connected POS workflow that keeps order taking, KOTs, kitchen progress, adjustments, and billing organized.",
      primaryCta: "Book a Free Demo",
      secondaryCta: "Watch Product Tour",
      image: "/Images/Pos/Orders/new-hero.webp",
    },

    problems: {
      eyebrow: "BUSINESS CHALLENGES",
      title: "Every Order Has a Lot Going On. Your POS Should Keep It Simple.",
      description:
        "Restaurant orders move through multiple people and stages before they are complete. iMaker Restro keeps the order workflow connected so your team can focus on service instead of chasing information.",
      items: [
        {
          problem: "Orders can get lost between service and the kitchen.",
          solution:
            "Send orders through a connected workflow with KOTs and kitchen status tracking.",
        },
        {
          problem: "Busy service makes order changes harder to manage.",
          solution:
            "Update orders, reorder items, and make supported adjustments from the POS.",
        },
        {
          problem: "Cancelled or complimentary items need proper control.",
          solution:
            "Manage cancellations and No Charge orders while keeping the activity recorded.",
        },
        {
          problem: "Different order types can complicate daily operations.",
          solution:
            "Handle dine-in and takeaway orders from the same connected POS.",
        },
      ],
    },

    screens: [
      {
        id: "order-management-screen",
        focus: "Order Management",
        title: "One Place to Manage Every Order",
        description:
          "Create and manage restaurant orders while keeping items, quantities, instructions, order status, and billing information connected.",
        layout: "right",
        image: "/images/features/orders/order-management-screen.webp",
        highlights: [
          "Create and manage dine-in orders",
          "Handle takeaway orders without blocking tables",
          "Add items and quantities to an active order",
          "Review and update order details",
          "Send order information to the kitchen through KOT",
          "Track the order as it moves through service",
        ],
      },

      {
        id: "order-actions-screen",
        focus: "Order Control",
        title: "Stay in Control When Orders Change",
        description:
          "Restaurant service doesn't always go exactly as planned. Handle reorders, cancellations, No Charge items, and supported bill adjustments while keeping control over the workflow.",
        layout: "left",
        image: "/images/features/orders/order-actions-screen.webp",
        highlights: [
          "Reorder items when customers need more",
          "Cancel individual items or complete orders",
          "Handle No Charge orders when required",
          "Apply fixed or percentage discounts",
          "Make supported bill adjustments",
          "Secure post-billing item additions with PIN access",
        ],
      },
    ],

    workflow: {
      eyebrow: "ORDER WORKFLOW",
      title: "From Order Taking to Billing, Everything Stays Connected",
      steps: [
        {
          icon: "ClipboardList",
          title: "Create Order",
          description:
            "Start a dine-in or takeaway order and add the required menu items.",
        },
        {
          icon: "ShoppingCart",
          title: "Build the Order",
          description:
            "Add quantities, item selections, and relevant order information.",
        },
        {
          icon: "ChefHat",
          title: "Send to Kitchen",
          description:
            "Send the order through KOT so the kitchen can begin preparation.",
        },
        {
          icon: "RefreshCw",
          title: "Track & Update",
          description:
            "Follow the order status and handle reorders or supported changes.",
        },
        {
          icon: "Receipt",
          title: "Complete Billing",
          description:
            "Move the completed order through the connected billing workflow.",
        },
      ],
    },

    analytics: {
      eyebrow: "ORDER REPORTS & INSIGHTS",
      title: "Understand How Orders Move Through Your Restaurant",
      description:
        "Use connected reports to understand sales activity, item performance, staff activity, cancellations, and other operational details generated from your orders.",
      image: "/images/features/orders/analytics-dashboard.webp",
      insights: [
        {
          title: "Item Sales",
          description: "See which menu items are contributing to your sales.",
        },
        {
          title: "Category Sales",
          description:
            "Understand performance across different menu categories.",
        },
        {
          title: "Staff Sales",
          description:
            "Review sales activity associated with your restaurant staff.",
        },
        {
          title: "Cancellation Reports",
          description: "Review cancelled order and item activity.",
        },
        {
          title: "Station Sales",
          description:
            "Understand sales associated with different kitchen stations.",
        },
        {
          title: "Section Sales",
          description: "Review sales performance across restaurant sections.",
        },
      ],
    },

    faq: {
      eyebrow: "FAQs",
      title: "Frequently Asked Questions",
      questions: [
        {
          question:
            "Can I manage dine-in and takeaway orders from the same POS?",
          answer:
            "Yes. iMaker Restro supports both dine-in and takeaway orders through the connected restaurant POS workflow.",
        },
        {
          question: "Can orders be sent directly to the kitchen?",
          answer:
            "Yes. Orders can generate Kitchen Order Tickets (KOTs), helping the kitchen receive the required order information.",
        },
        {
          question: "Can I cancel an item without cancelling the entire order?",
          answer:
            "Yes. iMaker Restro supports cancellation of individual items as well as complete orders.",
        },
        {
          question: "Can restaurant staff reorder items?",
          answer:
            "Yes. The order workflow supports reordering items when customers request additional items.",
        },
        {
          question: "Can we handle No Charge orders?",
          answer:
            "Yes. iMaker Restro supports No Charge (NC) orders and maintains NC customer records and reporting.",
        },
        {
          question: "Can an order be changed after billing?",
          answer:
            "Post-billing item additions are supported with PIN-secured access to help keep changes controlled.",
        },
      ],
    },

    cta: {
      title: "Ready to Bring Every Order Under Control?",
      description:
        "Give your restaurant team a connected way to manage orders from the first item added to the final bill.",
      primaryCta: "Book a Free Demo",
      secondaryCta: "Talk to Our Team",
    },
  },

  // TABLE MANAGEMENT
  {
    slug: "restaurant-table-management",
    isFeatured: true,
    seo: {
      title: "Restaurant Table Management Software | iMaker Restro",

      description:
        "Manage restaurant floors, sections, tables, seating capacity, and table-based orders with flexible table management built into your POS.",

      keywords: [
        "restaurant table management software",
        "restaurant table management system",
        "restaurant floor management software",
        "restaurant seating management",
        "restaurant POS table management",
        "restaurant floor and table management",
        "restaurant table management India",
      ],

      canonical: "/features/restaurant-table-management",
    },
    card: {
      menuTitle: "Tables",
      eyebrow: "FLOOR MANAGEMENT",
      title: "Restaurant Table Management",
      description:
        "Manage restaurant sections, tables, seating capacity, table status, and table-based orders while keeping your floor operations connected to billing.",
      image: "/Images/Pos/Tables/card-1.webp",
    },

    hero: {
      eyebrow: "RESTAURANT TABLE MANAGEMENT",
      title: "Keep Your Restaurant Floor",
      highlightedTitle: "Organized at Every Table",
      description:
        "Manage floors, sections, tables, seating capacity, and table-based orders from one connected POS interface designed to keep service organized during every shift.",
      primaryCta: "Book a Free Demo",
      secondaryCta: "Watch Product Tour",
      image: "/Images/Pos/Tables/new-hero.webp",
    },

    problems: {
      eyebrow: "BUSINESS CHALLENGES",
      title: "A Busy Floor Should Feel Organized, Not Chaotic",
      description:
        "When tables, sections, and orders are difficult to track, service slows down. iMaker Restro gives your team a clear view of the restaurant floor and keeps table operations connected to ordering and billing.",
      items: [
        {
          problem:
            "Staff struggle to keep track of occupied and available tables.",
          solution:
            "Manage restaurant tables from a clear floor and section-based layout.",
        },
        {
          problem:
            "Different restaurant areas need different table arrangements.",
          solution:
            "Organize your restaurant across multiple floors and sections.",
        },
        {
          problem: "Large groups may require multiple tables.",
          solution:
            "Use mergeable tables to support larger seating requirements.",
        },
        {
          problem: "Takeaway orders can interfere with table-based service.",
          solution:
            "Handle takeaway orders without unnecessarily blocking restaurant tables.",
        },
      ],
    },

    screens: [
      {
        id: "floor-management-screen",
        focus: "Floor Management",
        title: "See Your Restaurant Floor at a Glance",
        description:
          "Organize your restaurant into floors and sections and give your team a clearer way to manage tables throughout the day.",
        layout: "right",
        image: "/Images/Pos/Tables/step-1.webp",
        highlights: [
          "Manage multiple restaurant floors",
          "Organize tables into different sections",
          "Create and manage restaurant tables",
          "Set seating capacity for tables",
          "View the restaurant layout from one place",
          "Keep table operations connected to orders",
        ],
      },

      {
        id: "table-operations-screen",
        focus: "Table Operations",
        title: "Make Table Service Easier to Manage",
        description:
          "Keep table-based service flexible with seating information, mergeable tables, and a workflow that connects tables directly to restaurant orders.",
        layout: "left",
        image: "/Images/Pos/Tables/step-2.webp",
        highlights: [
          "Assign seating capacity to individual tables",
          "Merge tables when larger groups need more space",
          "Start orders directly from restaurant tables",
          "Keep table and order information connected",
          "Manage multiple sections within the restaurant",
          "Process takeaway orders without occupying tables",
        ],
      },
    ],

    workflow: {
      eyebrow: "TABLE WORKFLOW",
      title: "From Floor Setup to the Final Bill",
      steps: [
        {
          icon: "LayoutGrid",
          title: "Set Up Floors",
          description:
            "Create the floors and restaurant areas your operation needs.",
        },
        {
          icon: "Map",
          title: "Organize Sections",
          description:
            "Arrange tables into sections that match your restaurant layout.",
        },
        {
          icon: "Armchair",
          title: "Manage Tables",
          description:
            "Configure tables and their seating capacity for daily service.",
        },
        {
          icon: "Users",
          title: "Handle Guests",
          description:
            "Use mergeable tables when larger groups need additional seating.",
        },
        {
          icon: "Receipt",
          title: "Connect to Billing",
          description:
            "Keep table orders connected through the ordering and billing workflow.",
        },
      ],
    },

    analytics: {
      eyebrow: "TABLE & SALES INSIGHTS",
      title: "Understand What's Happening Across Your Floor",
      description:
        "Keep table operations connected to restaurant reporting so you can review sales activity across sections and understand how your restaurant is performing.",
      image: "/images/features/tables/analytics-dashboard.webp",
      insights: [
        {
          title: "Section Sales",
          description:
            "Review sales performance across different restaurant sections.",
        },
        {
          title: "Station Sales",
          description:
            "Understand sales associated with different operating stations.",
        },
        {
          title: "Daily Sales",
          description:
            "Review overall sales generated during restaurant operations.",
        },
        {
          title: "Staff Sales",
          description: "See sales activity associated with restaurant staff.",
        },
      ],
    },

    faq: {
      eyebrow: "FAQs",
      title: "Frequently Asked Questions",
      questions: [
        {
          question: "Can I manage multiple floors in the restaurant?",
          answer:
            "Yes. iMaker Restro supports multiple restaurant floors so you can organize your complete floor layout within the POS.",
        },
        {
          question: "Can I divide the restaurant into different sections?",
          answer:
            "Yes. You can create multiple sections and organize tables according to your restaurant layout.",
        },
        {
          question: "Can I set seating capacity for tables?",
          answer:
            "Yes. iMaker Restro supports seating capacity management for restaurant tables.",
        },
        {
          question: "Can restaurant tables be merged?",
          answer:
            "Yes. Mergeable tables are supported for situations where larger groups require combined seating.",
        },
        {
          question:
            "Can I take takeaway orders without occupying a restaurant table?",
          answer:
            "Yes. Takeaway orders can be handled without blocking tables in the restaurant floor layout.",
        },
      ],
    },

    cta: {
      title: "Ready to Take Control of Your Restaurant Floor?",
      description:
        "Give your team a clearer way to manage floors, sections, tables, seating, and table-based orders from one connected POS.",
      primaryCta: "Book a Free Demo",
      secondaryCta: "Talk to Our Team",
    },
  },

  // Restaurant Menu Management
  {
    slug: "restaurant-menu-management",
    isFeatured: true,
    seo: {
      title: "Restaurant Menu Management Software | iMaker Restro",

      description:
        "Manage restaurant menus with categories, variants, add-ons, custom-price items, special instructions, and flexible tax settings.",

      keywords: [
        "restaurant menu management software",
        "restaurant menu management system",
        "restaurant POS menu management",
        "restaurant menu software",
        "restaurant menu builder",
        "restaurant item management software",
        "restaurant menu management India",
        "restaurant menu and item management",
      ],

      canonical: "/features/restaurant-menu-management",
    },

    card: {
      menuTitle: "Menu",
      eyebrow: "MENU & ITEMS",
      title: "Restaurant Menu Management",
      description:
        "Create and organize menu categories, items, variants, add-ons, open-price items, special instructions, and tax settings for flexible restaurant ordering.",
      image: "/Images/Pos/Menu/card-1.webp",
    },

    hero: {
      eyebrow: "RESTAURANT MENU MANAGEMENT",
      title: "Build a Menu That",
      highlightedTitle: "Works the Way You Serve",
      description:
        "Create and manage restaurant menu items with categories, variants, add-ons, custom pricing, special instructions, and flexible tax settings—all connected to your POS.",
      primaryCta: "Book a Free Demo",
      secondaryCta: "Watch Product Tour",
      image: "/Images/Pos/Menu/new-hero.webp",
    },

    problems: {
      eyebrow: "BUSINESS CHALLENGES",
      title: "Your Menu Shouldn't Limit How Your Restaurant Operates",
      description:
        "Restaurants rarely have a one-size-fits-all menu. Different items need different options, prices, instructions, and tax settings. iMaker Restro keeps those details organized within the ordering workflow.",
      items: [
        {
          problem: "A growing menu becomes difficult to organize.",
          solution:
            "Structure menu items into clear categories for faster navigation during ordering.",
        },
        {
          problem: "Some items need sizes, variants, or additional choices.",
          solution:
            "Support simple items, variants, and add-ons within your menu setup.",
        },
        {
          problem: "Not every order fits a fixed menu price.",
          solution: "Use open items when staff need to enter a custom price.",
        },
        {
          problem: "Customer requests can get lost during ordering.",
          solution: "Capture special instructions directly with the order.",
        },
      ],
    },

    screens: [
      {
        id: "menu-management-screen",
        focus: "Menu Management",
        title: "Keep Your Entire Menu Organized",
        description:
          "Manage categories and different types of menu items from one place, making it easier for your team to find and add the right items during service.",
        layout: "right",
        image: "/Images/Pos/Menu/step-1.webp",
        highlights: [
          "Organize items into menu categories",
          "Create simple menu items",
          "Configure items with different variants",
          "Add optional add-ons to menu items",
          "Create open items with custom pricing",
          "Keep menu information ready for ordering",
        ],
      },

      {
        id: "menu-options-screen",
        focus: "Item Options",
        title: "Give Your Menu the Flexibility It Needs",
        description:
          "Handle the different ways customers order your food with variants, add-ons, custom-price items, and special instructions built into the menu workflow.",
        layout: "left",
        image: "/Images/Pos/Menu/step-1.webp",
        highlights: [
          "Support multiple item variants",
          "Offer add-ons with menu items",
          "Enter custom prices for open items",
          "Capture customer special instructions",
          "Apply inclusive or exclusive tax settings",
          "Support multiple tax types",
        ],
      },
    ],

    workflow: {
      eyebrow: "MENU WORKFLOW",
      title: "From Menu Setup to the Customer's Order",
      steps: [
        {
          icon: "LayoutList",
          title: "Create Categories",
          description:
            "Organize your menu into clear categories for easier navigation.",
        },
        {
          icon: "Utensils",
          title: "Add Items",
          description:
            "Create simple items and configure the menu information your team needs.",
        },
        {
          icon: "SlidersHorizontal",
          title: "Add Options",
          description:
            "Set up variants, add-ons, and other item choices where required.",
        },
        {
          icon: "MessageSquare",
          title: "Capture Instructions",
          description:
            "Record special instructions when customers need something specific.",
        },
        {
          icon: "ShoppingCart",
          title: "Use in Orders",
          description:
            "Keep the configured menu available directly within the restaurant ordering workflow.",
        },
      ],
    },

    analytics: {
      eyebrow: "MENU & SALES INSIGHTS",
      title: "See Which Parts of Your Menu Are Performing",
      description:
        "Your menu becomes part of your restaurant's sales data, helping you understand item and category performance through connected reports.",
      image: "/images/features/menu/analytics-dashboard.webp",
      insights: [
        {
          title: "Item Sales",
          description: "See sales performance for individual menu items.",
        },
        {
          title: "Category Sales",
          description:
            "Understand how different menu categories contribute to sales.",
        },
        {
          title: "Staff Sales",
          description:
            "Review sales activity associated with restaurant staff.",
        },
        {
          title: "Tax Reports",
          description:
            "Review tax-related information generated from restaurant sales.",
        },
      ],
    },

    faq: {
      eyebrow: "FAQs",
      title: "Frequently Asked Questions",
      questions: [
        {
          question: "Can I organize my restaurant menu into categories?",
          answer:
            "Yes. iMaker Restro supports item categories so your restaurant team can organize and navigate the menu more easily.",
        },
        {
          question: "Can I create different variants for the same menu item?",
          answer:
            "Yes. The menu system supports variant items, allowing you to configure different versions of a menu item.",
        },
        {
          question: "Can I add optional add-ons to menu items?",
          answer:
            "Yes. iMaker Restro supports add-on items that can be associated with your menu.",
        },
        {
          question: "Can staff enter a custom price for an item?",
          answer:
            "Yes. Open Items allow staff to enter a custom price when a fixed menu price is not appropriate.",
        },
        {
          question: "Can I add special instructions to an order?",
          answer:
            "Yes. The menu and ordering workflow supports special instructions so customer requests can be captured with the order.",
        },
        {
          question: "Does the menu support different tax configurations?",
          answer:
            "Yes. iMaker Restro supports inclusive and exclusive tax settings along with multiple tax types.",
        },
      ],
    },

    cta: {
      title: "Ready to Build a More Flexible Restaurant Menu?",
      description:
        "Give your team a structured menu that supports the way your restaurant actually takes and manages orders.",
      primaryCta: "Book a Free Demo",
      secondaryCta: "Talk to Our Team",
    },
  },

  // Restaurant Inventory Management
  {
    slug: "restaurant-inventory-management",
    isFeatured: true,
    seo: {
      title: "Restaurant Inventory Management Software | iMaker Restro",

      description:
        "Manage restaurant inventory and stock with iMaker Restro. Keep stock organized, monitor inventory, and connect stock management with daily restaurant operations.",

      keywords: [
        "restaurant inventory management software",
        "restaurant inventory management system",
        "restaurant stock management software",
        "restaurant inventory software",
        "restaurant stock control software",
        "restaurant POS inventory management",
        "inventory management for restaurants",
        "restaurant inventory management India",
      ],

      canonical: "/features/restaurant-inventory-management",
    },

    card: {
      menuTitle: "Inventory",
      eyebrow: "STOCK CONTROL",
      title: "Restaurant Inventory Management",
      description:
        "Manage restaurant inventory and stock from one connected system, keeping your stock information organized alongside everyday restaurant operations.",
      image: "/Images/Pos/Inventory/card-1.webp",
    },

    hero: {
      eyebrow: "RESTAURANT INVENTORY MANAGEMENT",
      title: "Keep Your Restaurant Stock",
      highlightedTitle: "Under Control",
      description:
        "Manage restaurant inventory and stock from a connected POS platform, giving your team better visibility into what is available and helping keep daily operations organized.",
      primaryCta: "Book a Free Demo",
      secondaryCta: "Watch Product Tour",
      image: "/Images/Pos/Inventory/new-hero.webp",
    },

    problems: {
      eyebrow: "BUSINESS CHALLENGES",
      title: "Stock Problems Shouldn't Disrupt Restaurant Operations",
      description:
        "Poor stock visibility can make everyday restaurant operations harder to manage. iMaker Restro brings inventory management into the same platform your team already uses to run the restaurant.",
      items: [
        {
          problem: "Staff don't have a clear view of current stock.",
          solution: "Manage restaurant inventory from one connected system.",
        },
        {
          problem: "Stock information is difficult to keep organized.",
          solution:
            "Maintain inventory information alongside your restaurant's daily operations.",
        },
        {
          problem:
            "Inventory and restaurant operations are managed separately.",
          solution:
            "Keep inventory management connected to the same POS ecosystem.",
        },
        {
          problem: "Managers need better visibility across the business.",
          solution:
            "Use connected reports and dashboards to understand restaurant performance.",
        },
      ],
    },

    screens: [
      {
        id: "inventory-screen",
        focus: "Inventory",
        title: "A Clearer View of Restaurant Stock",
        description:
          "Keep inventory and stock information organized so your team can manage restaurant operations with better visibility.",
        layout: "right",
        image: "/images/features/inventory/inventory-screen.webp",
        highlights: [
          "Manage restaurant inventory from one place",
          "Keep stock information organized",
          "Monitor inventory as part of daily operations",
          "Connect inventory with your restaurant POS workflow",
          "Reduce the need for disconnected inventory records",
          "Give managers a clearer operational view",
        ],
      },

      {
        id: "stock-management-screen",
        focus: "Stock Management",
        title: "Keep Inventory Connected to the Business",
        description:
          "Bring inventory management into your wider restaurant management system instead of treating stock as a completely separate process.",
        layout: "left",
        image: "/images/features/inventory/stock-management-screen.webp",
        highlights: [
          "Keep inventory within your restaurant management platform",
          "Manage stock alongside other restaurant operations",
          "Maintain centralized inventory information",
          "Support day-to-day stock management",
          "Access connected business information",
          "Build a more organized restaurant workflow",
        ],
      },
    ],

    workflow: {
      eyebrow: "INVENTORY WORKFLOW",
      title: "A More Connected Approach to Restaurant Stock",
      steps: [
        {
          icon: "Package",
          title: "Manage Inventory",
          description:
            "Keep restaurant inventory and stock information organized.",
        },
        {
          icon: "ClipboardList",
          title: "Track Stock",
          description:
            "Maintain visibility into the stock your restaurant manages.",
        },
        {
          icon: "ShoppingCart",
          title: "Run Daily Operations",
          description:
            "Keep inventory management connected to your POS workflow.",
        },
        {
          icon: "BarChart3",
          title: "Review Performance",
          description:
            "Use connected reports to understand restaurant activity.",
        },
        {
          icon: "LayoutDashboard",
          title: "Monitor the Business",
          description:
            "Bring operational information together in one platform.",
        },
      ],
    },

    analytics: {
      eyebrow: "INVENTORY & BUSINESS INSIGHTS",
      title: "Connect Stock Management with Restaurant Performance",
      description:
        "Inventory is only one part of running a restaurant. iMaker Restro connects stock management with your broader POS, reporting, and operational workflows.",
      image: "/images/features/inventory/analytics-dashboard.webp",
      insights: [
        {
          title: "Inventory Management",
          description:
            "Keep restaurant inventory and stock information organized.",
        },
        {
          title: "Sales Reports",
          description: "Review daily sales and item-level performance.",
        },
        {
          title: "Category Reports",
          description:
            "Understand performance across different menu categories.",
        },
        {
          title: "Business Dashboard",
          description:
            "Monitor sales, running orders, active tables, and revenue from one view.",
        },
      ],
    },

    faq: {
      eyebrow: "FAQs",
      title: "Frequently Asked Questions",
      questions: [
        {
          question:
            "Does iMaker Restro include restaurant inventory management?",
          answer:
            "Yes. iMaker Restro includes inventory and stock management as part of its restaurant management platform.",
        },
        {
          question: "Can I manage inventory from the same system as my POS?",
          answer:
            "Yes. Inventory management is part of the connected iMaker Restro POS and restaurant management system.",
        },
        {
          question: "Can I manage stock for my restaurant?",
          answer:
            "Yes. The platform includes inventory and stock management capabilities for restaurant operations.",
        },
        {
          question: "Can I access inventory alongside restaurant reports?",
          answer:
            "Yes. iMaker Restro combines inventory management with dashboards and reports covering restaurant operations and performance.",
        },
        {
          question: "Is inventory management available for multiple branches?",
          answer:
            "iMaker Restro supports multi-branch management with centralized monitoring and reporting. Inventory capabilities can therefore be used within the broader multi-branch platform.",
        },
      ],
    },

    cta: {
      title: "Ready to Bring Your Restaurant Stock Under Control?",
      description:
        "Manage inventory from the same connected platform you use to run your restaurant and monitor daily business performance.",
      primaryCta: "Book a Free Demo",
      secondaryCta: "Talk to Our Team",
    },
  },

  // KITCHEN
  {
    slug: "restaurant-kitchen-management",
    isFeatured: false,
    seo: {
      title:
        "Restaurant Kitchen Management Software | KOT & KDS | iMaker Restro",

      description:
        "Manage restaurant kitchen operations with automatic KOTs, kitchen and station routing, Kitchen Display System, and real-time order status tracking.",

      keywords: [
        "restaurant kitchen management software",
        "restaurant kitchen management system",
        "restaurant KOT software",
        "kitchen display system restaurant",
        "KDS software for restaurants",
        "restaurant kitchen order management",
        "restaurant kitchen software",
        "restaurant KOT management system",
        "restaurant kitchen management India",
      ],

      canonical: "/features/restaurant-kitchen-management",
    },
    card: {
      menuTitle: "Kitchen",
      eyebrow: "KITCHEN OPERATIONS",
      title: "Restaurant Kitchen Management",
      description:
        "Connect orders with your kitchen using automatic KOTs, multiple kitchen and station routing, Kitchen Display System, and clear order preparation statuses.",
      image: "/Images/Pos/Kitchen/card-1.webp",
    },
    hero: {
      eyebrow: "RESTAURANT KITCHEN MANAGEMENT",
      title: "Keep Your Kitchen",
      highlightedTitle: "Moving in Sync",
      description:
        "Connect orders to your kitchen with automatic KOTs, multiple kitchen and station routing, a digital Kitchen Display System, and clear order-status tracking.",
      primaryCta: "Book a Free Demo",
      secondaryCta: "Watch Product Tour",
      image: "/Images/Pos/Kitchen/new-hero.webp",
    },

    problems: {
      eyebrow: "BUSINESS CHALLENGES",
      title: "When the Kitchen Falls Behind, Service Feels It",
      description:
        "Kitchen teams need clear order information and a simple way to know what needs to be prepared next. iMaker Restro keeps incoming orders organized and makes their progress easier to track.",
      items: [
        {
          problem: "Kitchen staff depend on paper or manually passed orders.",
          solution:
            "Generate KOTs automatically from restaurant orders and send the right information to the kitchen.",
        },
        {
          problem: "Different preparation areas need different orders.",
          solution: "Route orders across multiple kitchens and stations.",
        },
        {
          problem: "Teams have limited visibility into order progress.",
          solution:
            "Use a Kitchen Display System to view and manage active kitchen orders digitally.",
        },
        {
          problem: "Service staff don't know whether an order is ready.",
          solution:
            "Track orders through clear Pending, Preparing, Ready, and Served statuses.",
        },
      ],
    },

    screens: [
      {
        id: "kot-screen",
        focus: "Kitchen Order Tickets",
        title: "Send Every Order to the Right Kitchen",
        description:
          "Automatically generate KOTs from restaurant orders and route them to the appropriate kitchen or station so preparation can begin without unnecessary manual coordination.",
        layout: "right",
        image: "/images/features/kitchen/kot-screen.webp",
        highlights: [
          "Generate KOTs automatically from orders",
          "Send orders to the appropriate kitchen",
          "Route items across multiple kitchen stations",
          "Keep kitchen order information organized",
          "Reduce manual communication between service and kitchen",
          "Keep order preparation connected to the POS",
        ],
      },

      {
        id: "kds-screen",
        focus: "Kitchen Display System",
        title: "Give Your Kitchen a Clear Digital View",
        description:
          "Replace scattered paper tickets with a digital kitchen display that helps the team see active orders and follow their preparation status.",
        layout: "left",
        image: "/images/features/kitchen/kds-screen.webp",
        highlights: [
          "View active kitchen orders digitally",
          "See pending orders clearly",
          "Move orders into preparation",
          "Mark orders ready when preparation is complete",
          "Track served orders through the workflow",
          "Keep kitchen and service teams in sync",
        ],
      },
    ],

    workflow: {
      eyebrow: "KITCHEN WORKFLOW",
      title: "From Customer Order to Served",
      steps: [
        {
          icon: "ShoppingCart",
          title: "Order Created",
          description:
            "A restaurant order is created through the connected POS workflow.",
        },
        {
          icon: "ReceiptText",
          title: "KOT Generated",
          description:
            "The system automatically generates the Kitchen Order Ticket.",
        },
        {
          icon: "GitBranch",
          title: "Route to Kitchen",
          description:
            "The order is sent to the appropriate kitchen or station.",
        },
        {
          icon: "ChefHat",
          title: "Prepare Order",
          description:
            "Kitchen staff work through orders and update their preparation status.",
        },
        {
          icon: "CheckCircle2",
          title: "Ready & Served",
          description:
            "The order moves through Ready and Served as it reaches the customer.",
        },
      ],
    },

    analytics: {
      eyebrow: "KITCHEN & SALES INSIGHTS",
      title: "See How Kitchen Activity Connects to the Business",
      description:
        "Kitchen operations are connected to your wider restaurant reporting, giving managers visibility into station activity, item performance, staff sales, and daily operations.",
      image: "/images/features/kitchen/analytics-dashboard.webp",
      insights: [
        {
          title: "Station Sales",
          description:
            "Review sales associated with different kitchen stations.",
        },
        {
          title: "Item Sales",
          description: "Identify which menu items are contributing to sales.",
        },
        {
          title: "Category Sales",
          description:
            "Understand performance across different menu categories.",
        },
        {
          title: "Staff Sales",
          description:
            "Review sales activity associated with restaurant staff.",
        },
      ],
    },

    faq: {
      eyebrow: "FAQs",
      title: "Frequently Asked Questions",
      questions: [
        {
          question: "Does iMaker Restro automatically generate KOTs?",
          answer:
            "Yes. KOTs are generated automatically from restaurant orders and can be routed to the appropriate kitchen or station.",
        },
        {
          question: "Can I route orders to different kitchens or stations?",
          answer:
            "Yes. iMaker Restro supports multiple kitchens and stations, allowing orders to be routed according to your restaurant's setup.",
        },
        {
          question: "Does iMaker Restro have a Kitchen Display System?",
          answer:
            "Yes. The Kitchen Display System provides a digital view of kitchen orders and helps the team manage their preparation status.",
        },
        {
          question: "What order statuses can the kitchen track?",
          answer:
            "Kitchen orders can move through Pending, Preparing, Ready, and Served statuses.",
        },
        {
          question:
            "Can kitchen staff manage orders digitally instead of using paper KOTs?",
          answer:
            "Yes. The Kitchen Display System provides a digital workflow for viewing and managing kitchen orders.",
        },
        {
          question:
            "Can kitchen operations be connected to restaurant reporting?",
          answer:
            "Yes. Kitchen-related activity is connected to the wider POS reporting system, including station, item, category, and staff sales information.",
        },
      ],
    },

    cta: {
      title: "Ready to Keep Your Kitchen in Sync?",
      description:
        "Connect orders, KOTs, kitchen stations, and preparation status with a kitchen workflow built into your restaurant POS.",
      primaryCta: "Book a Free Demo",
      secondaryCta: "Talk to Our Team",
    },
  },

  // Customer Management
  {
    slug: "restaurant-customer-management",
    isFeatured: false,
    seo: {
      title: "Restaurant Customer Management Software | iMaker Restro",

      description:
        "Manage restaurant customer records, contact information, and dues while keeping customer data connected to orders, billing, payments, and daily operations.",

      keywords: [
        "restaurant customer management software",
        "restaurant customer management system",
        "restaurant CRM software",
        "restaurant customer database",
        "customer management for restaurants",
        "restaurant POS customer management",
        "restaurant customer records software",
        "restaurant customer management India",
      ],

      canonical: "/features/restaurant-customer-management",
    },

    card: {
      menuTitle: "Customers",
      eyebrow: "CUSTOMER RECORDS",
      title: "Restaurant Customer Management",
      description:
        "Maintain customer information and keep it connected with orders, billing, payments, and dues so your team can manage customer records more easily.",
      image: "/Images/Pos/Customers/card-1.webp",
    },

    hero: {
      eyebrow: "RESTAURANT CUSTOMER MANAGEMENT",
      title: "Keep Every Customer",
      highlightedTitle: "Connected to Your Restaurant",
      description:
        "Maintain customer information and keep it connected to orders, billing, and restaurant operations so your team can deliver a more informed and consistent customer experience.",
      primaryCta: "Book a Free Demo",
      secondaryCta: "Watch Product Tour",
      image: "/Images/Pos/Customers/new-hero.webp",
    },

    problems: {
      eyebrow: "BUSINESS CHALLENGES",
      title: "Customer Information Shouldn't Get Lost Between Visits",
      description:
        "When customer information is scattered across bills, notebooks, or disconnected systems, it becomes difficult to maintain useful records. iMaker Restro keeps customer information within your restaurant's operational workflow.",
      items: [
        {
          problem: "Customer information is difficult to keep organized.",
          solution:
            "Maintain customer details directly within your connected restaurant POS.",
        },
        {
          problem: "Staff need customer information while handling orders.",
          solution:
            "Keep customer records connected to the ordering and billing workflow.",
        },
        {
          problem: "Outstanding customer dues are difficult to track.",
          solution:
            "Maintain visibility into customer dues as part of your restaurant records.",
        },
        {
          problem:
            "Customer information and restaurant operations are managed separately.",
          solution:
            "Keep customer records connected with orders, bills, payments, and daily operations.",
        },
      ],
    },

    screens: [
      {
        id: "customer-management-screen",
        focus: "Customer Records",
        title: "Keep Customer Information in One Place",
        description:
          "Maintain customer information within your restaurant POS so your team can access relevant customer details as part of everyday operations.",
        layout: "right",
        image: "/images/features/customers/customer-management-screen.webp",
        highlights: [
          "Maintain customer information",
          "Keep customer records organized",
          "Connect customer details with restaurant transactions",
          "Access customer information during daily operations",
          "Keep customer data within the POS ecosystem",
          "Build a more consistent customer record",
        ],
      },

      {
        id: "customer-dues-screen",
        focus: "Customer Dues",
        title: "Keep Track of Customer Dues",
        description:
          "Maintain visibility into outstanding customer dues alongside your restaurant's billing and payment information.",
        layout: "left",
        image: "/images/features/customers/customer-dues-screen.webp",
        highlights: [
          "Maintain customer due information",
          "Keep dues connected to customer records",
          "Review outstanding customer amounts",
          "Keep payment information organized",
          "Connect dues with restaurant billing",
          "Maintain clearer customer transaction records",
        ],
      },
    ],

    workflow: {
      eyebrow: "CUSTOMER WORKFLOW",
      title: "From Customer Details to a Connected Restaurant Record",
      steps: [
        {
          icon: "UserPlus",
          title: "Add Customer",
          description:
            "Create or maintain the customer's information within the POS.",
        },
        {
          icon: "ClipboardList",
          title: "Connect Activity",
          description:
            "Keep customer information connected to relevant restaurant transactions.",
        },
        {
          icon: "Receipt",
          title: "Manage Billing",
          description:
            "Use customer information alongside the restaurant billing workflow.",
        },
        {
          icon: "WalletCards",
          title: "Track Dues",
          description:
            "Maintain visibility into outstanding customer dues where applicable.",
        },
        {
          icon: "BarChart3",
          title: "Review Records",
          description:
            "Use connected customer and transaction information to understand restaurant activity.",
        },
      ],
    },

    analytics: {
      eyebrow: "CUSTOMER & BUSINESS INSIGHTS",
      title: "Keep Customer Activity Connected to Your Business",
      description:
        "Customer information becomes more useful when it stays connected to your restaurant's orders, billing, payments, and reporting workflows.",
      image: "/images/features/customers/analytics-dashboard.webp",
      insights: [
        {
          title: "Customer Records",
          description:
            "Keep customer information organized within your restaurant system.",
        },
        {
          title: "Customer Dues",
          description: "Maintain visibility into outstanding customer amounts.",
        },
        {
          title: "Sales Reports",
          description:
            "Review sales and transaction activity across your restaurant.",
        },
        {
          title: "Payment Reports",
          description:
            "Understand collections and payment activity from your billing records.",
        },
      ],
    },

    faq: {
      eyebrow: "FAQs",
      title: "Frequently Asked Questions",
      questions: [
        {
          question: "Can I maintain customer information in iMaker Restro?",
          answer:
            "Yes. iMaker Restro includes customer features that allow restaurants to maintain customer information within the connected POS system.",
        },
        {
          question:
            "Can customer information be connected to restaurant billing?",
          answer:
            "Yes. Customer information can be maintained as part of the restaurant's ordering and billing workflow.",
        },
        {
          question: "Can I track customer dues?",
          answer:
            "Yes. Customer dues are supported as part of the restaurant's customer and billing records.",
        },
        {
          question: "Is customer management connected to the POS?",
          answer:
            "Yes. Customer information is part of the connected iMaker Restro restaurant management workflow.",
        },
        {
          question:
            "Is customer management the same as the Restaurant Loyalty Program?",
          answer:
            "No. Customer management focuses on customer information and operational records, while the Restaurant Loyalty Program extends the experience with loyalty-related capabilities.",
        },
      ],
    },

    cta: {
      title: "Ready to Keep Your Customer Records Connected?",
      description:
        "Bring customer information, billing, and restaurant operations together in one connected POS platform.",
      primaryCta: "Book a Free Demo",
      secondaryCta: "Talk to Our Team",
    },
  },

  // Restaurant Shift Management
  {
    slug: "restaurant-shift-management",
    isFeatured: false,
    seo: {
      title: "Restaurant Shift Management Software | iMaker Restro",

      description:
        "Manage restaurant shifts, opening and closing balances, staff activity, cash handling, and shift reports with iMaker Restro.",

      keywords: [
        "restaurant shift management software",
        "restaurant shift management system",
        "restaurant POS shift management",
        "cashier shift management software",
        "restaurant staff shift tracking",
        "restaurant shift reporting",
        "restaurant cash drawer management",
        "restaurant shift closing software",
        "restaurant shift management India",
      ],

      canonical: "/features/restaurant-shift-management",
    },

    card: {
      menuTitle: "Shifts",
      eyebrow: "SHIFT CONTROL",
      title: "Restaurant Shift Management",
      description:
        "Manage shift opening and closing, cash handling, staff activity, sales, payments, reconciliation, and shift reports from your restaurant POS.",
      image: "/Images/Pos/Shifts/card-1.webp",
    },

    hero: {
      eyebrow: "RESTAURANT SHIFT MANAGEMENT",
      title: "Keep Every Shift",
      highlightedTitle: "Under Control.",
      description:
        "Manage shift opening, closing, staff activity, cash handling, and shift-level reports from one connected restaurant POS.",
      primaryCta: "Book a Free Demo",
      secondaryCta: "Watch Product Tour",
      image: "/Images/Pos/Shifts/new-hero.webp",
    },

    problems: {
      eyebrow: "BUSINESS CHALLENGES",
      title: "Every Shift Should End With Clear Numbers",
      description:
        "When shifts are managed manually, it becomes harder to track who handled the register, how much was collected, and where differences occurred. iMaker Restro keeps shift activity organized from opening to closing.",
      items: [
        {
          problem: "Opening and closing cash is difficult to track.",
          solution:
            "Record shift opening and closing information directly within the POS.",
        },
        {
          problem: "Managers lack visibility into individual shift activity.",
          solution:
            "Keep sales and transaction activity connected to each shift.",
        },
        {
          problem: "Cash differences are discovered too late.",
          solution:
            "Compare shift activity and closing amounts for clearer cash control.",
        },
        {
          problem: "Shift handovers depend on manual records.",
          solution:
            "Maintain a clear shift history and report for easier handover and review.",
        },
      ],
    },

    screens: [
      {
        id: "shift-opening-screen",
        focus: "Shift Opening",
        title: "Start Every Shift With a Clear Opening",
        description:
          "Open a shift with the information your team needs and keep the beginning of every operating period properly recorded.",
        layout: "right",
        image: "/Images/Pos/Shifts/step-1.webp",
        highlights: [
          "Start a new shift from the POS",
          "Record the opening cash amount",
          "Associate activity with the active shift",
          "Keep shift start information organized",
          "Give staff a clear starting point",
          "Maintain a history of shift activity",
        ],
      },

      {
        id: "shift-closing-screen",
        focus: "Shift Closing",
        title: "Close With Confidence",
        description:
          "Review shift sales, payment activity, and closing information before completing the shift and handing operations to the next team.",
        layout: "left",
        image: "/Images/Pos/Shifts/step-2.webp",
        highlights: [
          "Review sales generated during the shift",
          "Review payment activity",
          "Record the closing amount",
          "Identify differences during reconciliation",
          "Complete the shift with a clear closing record",
          "Keep historical shift reports available for review",
        ],
      },
    ],

    workflow: {
      eyebrow: "SHIFT WORKFLOW",
      title: "From Shift Opening to Final Reconciliation",
      steps: [
        {
          icon: "LogIn",
          title: "Open Shift",
          description: "Start the shift and record the opening information.",
        },
        {
          icon: "ShoppingCart",
          title: "Run Operations",
          description:
            "Process orders and payments while activity is recorded against the shift.",
        },
        {
          icon: "Wallet",
          title: "Track Cash",
          description:
            "Keep cash and payment activity connected to the active shift.",
        },
        {
          icon: "ClipboardCheck",
          title: "Review Shift",
          description:
            "Review sales, payments, and other shift activity before closing.",
        },
        {
          icon: "CheckCircle",
          title: "Close & Reconcile",
          description:
            "Complete the shift and maintain a clear record for the next handover.",
        },
      ],
    },

    analytics: {
      eyebrow: "SHIFT REPORTS",
      title: "Know What Happened During Every Shift",
      description:
        "Review shift-level sales and payment information to understand daily activity, support reconciliation, and maintain better operational accountability.",
      image: "/images/features/shifts/shift-reports-dashboard.webp",
      insights: [
        {
          title: "Shift Sales",
          description: "Review the sales generated during each shift.",
        },
        {
          title: "Payment Summary",
          description:
            "Understand collections across available payment methods.",
        },
        {
          title: "Cash Reconciliation",
          description:
            "Compare recorded activity with the closing cash amount.",
        },
        {
          title: "Shift History",
          description: "Review previous shifts and their recorded activity.",
        },
      ],
    },

    faq: {
      eyebrow: "FAQs",
      title: "Frequently Asked Questions",
      questions: [
        {
          question: "What is shift management in a restaurant POS?",
          answer:
            "Shift management helps restaurants organize POS activity around individual operating shifts, including opening, transactions, closing, and shift reporting.",
        },
        {
          question: "Can I record the opening cash for a shift?",
          answer:
            "Yes. Shift management can be used to record the opening cash amount before the shift begins.",
        },
        {
          question: "Can I review sales for a specific shift?",
          answer:
            "Yes. Shift-level reporting helps you review sales and payment activity associated with a particular shift.",
        },
        {
          question: "Can I reconcile cash when closing a shift?",
          answer:
            "Yes. Shift closing allows the team to review the shift's activity and closing amount as part of the reconciliation process.",
        },
        {
          question: "Can managers review previous shifts?",
          answer:
            "Yes. Shift history and reports provide a record that can be reviewed after a shift has been completed.",
        },
      ],
    },

    cta: {
      title: "Ready to Bring More Control to Every Shift?",
      description:
        "Manage shift opening, daily activity, cash reconciliation, and shift reporting from one connected restaurant POS.",
      primaryCta: "Book a Free Demo",
      secondaryCta: "Talk to Our Team",
    },
  },

  // Restaurant Reports
  {
    slug: "restaurant-reports-analytics",
    isFeatured: false,
    seo: {
      title: "Restaurant Reports & Analytics Software | iMaker Restro",

      description:
        "Track restaurant sales, payments, staff performance, items, taxes, discounts, shifts, and business activity with connected reports and live dashboards.",

      keywords: [
        "restaurant reports and analytics software",
        "restaurant analytics software",
        "restaurant reporting software",
        "restaurant sales reporting software",
        "restaurant POS reports",
        "restaurant business analytics",
        "restaurant sales analytics",
        "restaurant performance dashboard",
        "restaurant reporting software India",
      ],

      canonical: "/features/restaurant-reports-analytics",
    },

    card: {
      menuTitle: "Reports",
      eyebrow: "BUSINESS INSIGHTS",
      title: "Restaurant Reports & Analytics",
      description:
        "Track sales, revenue, orders, tables, staff performance, items, categories, payments, taxes, discounts, shifts, cancellations, and other restaurant activity.",
      image: "/Images/Pos/Reports/card-1.webp",
    },

    hero: {
      eyebrow: "RESTAURANT REPORTS & ANALYTICS",
      title: "Turn Restaurant Data Into",
      highlightedTitle: "Clear Business Decisions",
      description:
        "See live sales, revenue, orders, tables, staff performance, and detailed reports from one connected dashboard built to help you understand how your restaurant is performing.",
      primaryCta: "Book a Free Demo",
      secondaryCta: "Watch Product Tour",
      image: "/Images/Pos/Reports/new-hero.webp",
    },

    problems: {
      eyebrow: "BUSINESS CHALLENGES",
      title: "You Can't Improve What You Can't Clearly See",
      description:
        "Restaurant data comes from sales, payments, staff, shifts, items, tables, and daily operations. iMaker Restro brings that information together so owners and managers can spend less time collecting numbers and more time understanding them.",
      items: [
        {
          problem:
            "Important business numbers are scattered across different records.",
          solution:
            "Bring sales, revenue, orders, tables, and staff performance into one connected dashboard.",
        },
        {
          problem: "Managers need more than just total sales.",
          solution:
            "Drill into item, category, staff, payment, tax, discount, and operational reports.",
        },
        {
          problem:
            "It's difficult to understand what happened during a shift or service period.",
          solution:
            "Review shift history, cancellations, adjustments, dues, and other operational activity.",
        },
        {
          problem:
            "Manual reporting takes time and makes business reviews harder.",
          solution:
            "Use ready-made reports and export business information when you need to analyze it elsewhere.",
        },
      ],
    },

    screens: [
      {
        id: "business-dashboard-screen",
        focus: "Live Dashboard",
        title: "See Your Restaurant at a Glance",
        description:
          "Get a live overview of the numbers that matter most, from current sales and revenue to running orders, active tables, and staff performance.",
        layout: "right",
        image: "/images/features/reports/dashboard-screen.webp",
        highlights: [
          "Monitor live sales activity",
          "View the current revenue overview",
          "See running orders in real time",
          "Monitor active restaurant tables",
          "Review staff performance",
          "Bring important business metrics into one view",
        ],
      },

      {
        id: "reports-screen",
        focus: "Detailed Reports",
        title: "Go Beyond the Top-Line Numbers",
        description:
          "Explore detailed reports to understand what's selling, how payments are coming in, where discounts are being applied, and how different parts of the restaurant are performing.",
        layout: "left",
        image: "/images/features/reports/reports-screen.webp",
        highlights: [
          "Review daily sales reports",
          "Analyze item and category sales",
          "Review staff and station sales",
          "Understand payment and tax activity",
          "Track discounts and bill adjustments",
          "Review dues, cancellations, and No Charge activity",
        ],
      },
    ],

    workflow: {
      eyebrow: "REPORTING WORKFLOW",
      title: "From Daily Activity to a Clear Business Picture",
      steps: [
        {
          icon: "Activity",
          title: "Run Your Restaurant",
          description:
            "Orders, payments, tables, staff activity, and other operations continue through the POS.",
        },
        {
          icon: "LayoutDashboard",
          title: "Monitor Live Data",
          description:
            "Use the dashboard to see current sales, revenue, orders, tables, and staff performance.",
        },
        {
          icon: "BarChart3",
          title: "Explore Reports",
          description:
            "Drill into sales, items, categories, payments, taxes, staff, and operational activity.",
        },
        {
          icon: "Search",
          title: "Understand Performance",
          description:
            "Identify patterns and understand how different parts of the restaurant are performing.",
        },
        {
          icon: "Download",
          title: "Export When Needed",
          description:
            "Export reports when you need to use restaurant data outside the POS.",
        },
      ],
    },

    analytics: {
      eyebrow: "REPORTS YOU CAN USE",
      title: "The Numbers Behind Your Restaurant, All in One Place",
      description:
        "From everyday sales to detailed operational activity, iMaker Restro gives owners and managers a broader view of what's happening across the restaurant.",
      image: "/images/features/reports/analytics-dashboard.webp",
      insights: [
        {
          title: "Sales & Revenue",
          description:
            "Review daily sales and get a clear view of restaurant revenue activity.",
        },
        {
          title: "Item & Category Performance",
          description:
            "Understand which menu items and categories are contributing to sales.",
        },
        {
          title: "Payment & Tax Reports",
          description:
            "Review collections, payment activity, and tax-related information.",
        },
        {
          title: "Staff Performance",
          description: "See sales activity associated with restaurant staff.",
        },
        {
          title: "Station & Section Sales",
          description:
            "Understand sales performance across kitchen stations and restaurant sections.",
        },
        {
          title: "Operational Reports",
          description:
            "Review dues, No Charge activity, cancellations, adjustments, and shift history.",
        },
      ],
    },

    faq: {
      eyebrow: "FAQs",
      title: "Frequently Asked Questions",
      questions: [
        {
          question: "What can I track with iMaker Restro Reports & Analytics?",
          answer:
            "You can monitor live sales, revenue, running orders, active tables, staff performance, and detailed reports covering sales, items, categories, payments, taxes, discounts, adjustments, dues, cancellations, shifts, and more.",
        },
        {
          question: "Can I see restaurant sales and revenue in real time?",
          answer:
            "Yes. The dashboard provides live sales and a revenue overview, along with visibility into running orders and active tables.",
        },
        {
          question: "Can I see which menu items are selling the most?",
          answer:
            "Yes. Item Sales and Category Sales reports help you understand the performance of individual menu items and menu categories.",
        },
        {
          question: "Can I track staff performance?",
          answer:
            "Yes. Staff Performance is available on the dashboard, while Staff Sales provides more detailed visibility into staff-associated sales activity.",
        },
        {
          question: "Can I track payments, taxes, and discounts?",
          answer:
            "Yes. iMaker Restro includes dedicated Payments, Tax, and Discount reports.",
        },
        {
          question: "Can I export restaurant reports?",
          answer:
            "Yes. The reporting system supports report export so restaurant data can be used outside the POS when required.",
        },
      ],
    },

    cta: {
      title: "Ready to See Your Restaurant More Clearly?",
      description:
        "Bring live business visibility and detailed restaurant reporting together in one connected platform.",
      primaryCta: "Book a Free Demo",
      secondaryCta: "Talk to Our Team",
    },
  },

  // Multi-Outlet
  {
    slug: "restaurant-multi-branch-management",
    isFeatured: false,
    seo: {
      title: "Restaurant Multi-Branch Management Software | iMaker Restro",

      description:
        "Manage multiple restaurant branches and outlets from one connected POS with centralized reporting, monitoring, and business visibility.",

      keywords: [
        "restaurant multi branch management software",
        "multi outlet restaurant management software",
        "restaurant franchise management software",
        "multi branch POS software",
        "restaurant chain management software",
        "multi outlet POS system",
        "restaurant branch management software",
        "centralized restaurant management software",
        "multi branch restaurant software India",
      ],

      canonical: "/features/restaurant-multi-branch-management",
    },
    card: {
      menuTitle: "Multi-Outlet",
      eyebrow: "MULTI-OUTLET",
      title: "Restaurant Multi-Branch Management",
      description:
        "Manage multiple restaurant branches from one platform with centralized monitoring, reporting, and visibility across your growing restaurant business.",
      image: "/Images/Pos/Franchises/card-1.webp",
    },
    hero: {
      eyebrow: "RESTAURANT MULTI-BRANCH MANAGEMENT",
      title: "One Platform for",
      highlightedTitle: "Every Restaurant Location",
      description:
        "Manage multiple branches and franchise outlets from one connected platform with centralized reporting and visibility across your restaurant business.",
      primaryCta: "Book a Free Demo",
      secondaryCta: "Watch Product Tour",
      image: "/Images/Pos/Franchises/new-hero.webp",
    },

    problems: {
      eyebrow: "BUSINESS CHALLENGES",
      title: "Managing More Outlets Shouldn't Mean Managing More Systems",
      description:
        "As your restaurant business grows, keeping track of multiple locations becomes harder when information is spread across separate systems. iMaker Restro gives owners a more connected way to monitor their branches from one place.",
      items: [
        {
          problem: "Each outlet operates with separate information.",
          solution:
            "Bring your restaurant locations into one connected platform.",
        },
        {
          problem: "Owners need to check multiple outlets individually.",
          solution: "Monitor branch activity from a centralized owner account.",
        },
        {
          problem: "Comparing outlet performance takes unnecessary effort.",
          solution:
            "Use centralized reports to get a clearer view across your branches.",
        },
        {
          problem: "Growing the business makes operational visibility harder.",
          solution:
            "Maintain a connected view of your expanding restaurant network from one platform.",
        },
      ],
    },

    screens: [
      {
        id: "multi-branch-dashboard-screen",
        focus: "Centralized Dashboard",
        title: "See Every Outlet From One Place",
        description:
          "Get a centralized view of your restaurant locations without switching between separate systems or accounts.",
        layout: "right",
        image:
          "/images/features/multi-branch/multi-branch-dashboard-screen.webp",
        highlights: [
          "Manage multiple restaurant branches",
          "Access outlets from one owner account",
          "Monitor branch activity centrally",
          "Keep outlet information organized",
          "Get a connected view of your restaurant network",
          "Reduce the need to manage separate systems",
        ],
      },

      {
        id: "branch-reports-screen",
        focus: "Centralized Reports",
        title: "Understand Performance Across Locations",
        description:
          "Review centralized restaurant reports to understand how your different branches are performing and get a broader view of the business.",
        layout: "left",
        image: "/images/features/multi-branch/branch-reports-screen.webp",
        highlights: [
          "Review reports across multiple branches",
          "Monitor outlet-level performance",
          "Compare restaurant activity across locations",
          "Keep branch reporting centralized",
          "Get a broader view of business performance",
          "Support decisions with connected outlet data",
        ],
      },
    ],

    workflow: {
      eyebrow: "MULTI-BRANCH WORKFLOW",
      title: "From One Outlet to a Connected Restaurant Network",
      steps: [
        {
          icon: "Building2",
          title: "Add Your Outlets",
          description:
            "Bring your restaurant branches or franchise locations into the platform.",
        },
        {
          icon: "Users",
          title: "Manage Centrally",
          description:
            "Access your locations through one connected owner account.",
        },
        {
          icon: "Activity",
          title: "Monitor Operations",
          description:
            "Keep visibility across your restaurant locations from a central view.",
        },
        {
          icon: "BarChart3",
          title: "Review Performance",
          description:
            "Use centralized reports to understand activity across your branches.",
        },
        {
          icon: "TrendingUp",
          title: "Grow With Clarity",
          description:
            "Maintain a connected view as your restaurant business expands.",
        },
      ],
    },

    analytics: {
      eyebrow: "CENTRALIZED BUSINESS VISIBILITY",
      title: "A Clearer View Across Every Location",
      description:
        "Centralized reporting helps restaurant owners understand what's happening across their branches without relying on disconnected outlet-level information.",
      image: "/images/features/multi-branch/multi-branch-analytics.webp",
      insights: [
        {
          title: "Branch Performance",
          description:
            "Review business activity across individual restaurant locations.",
        },
        {
          title: "Centralized Reports",
          description:
            "Bring reporting from multiple outlets into a more connected view.",
        },
        {
          title: "Outlet Monitoring",
          description:
            "Keep track of activity across your restaurant branches from one place.",
        },
        {
          title: "Business Overview",
          description:
            "Get a broader picture of how your restaurant network is performing.",
        },
      ],
    },

    faq: {
      eyebrow: "FAQs",
      title: "Frequently Asked Questions",
      questions: [
        {
          question:
            "Can I manage multiple restaurant branches with iMaker Restro?",
          answer:
            "Yes. iMaker Restro supports multi-branch and franchise management from one owner account.",
        },
        {
          question: "Can I monitor multiple outlets from one account?",
          answer:
            "Yes. Multiple branches can be managed and monitored through a centralized owner account.",
        },
        {
          question: "Can I access centralized reports for multiple branches?",
          answer:
            "Yes. iMaker Restro provides centralized reporting to help you maintain visibility across multiple restaurant locations.",
        },
        {
          question:
            "Is multi-branch management useful for restaurant franchises?",
          answer:
            "Yes. The platform supports multi-branch and franchise management, making it suitable for businesses operating multiple restaurant locations.",
        },
        {
          question:
            "Can I manage multiple outlets without using separate systems?",
          answer:
            "Yes. iMaker Restro is designed to provide a connected platform for managing multiple branches from a centralized owner account.",
        },
      ],
    },

    cta: {
      title: "Ready to Connect Every Restaurant Location?",
      description:
        "Manage your branches, monitor your business, and access centralized reporting from one connected restaurant platform.",
      primaryCta: "Book a Free Demo",
      secondaryCta: "Talk to Our Team",
    },
  },
];

export const getFeaturedPosFeatures = () => {
  return FEATURES.filter((feature) => feature.isFeatured === true).map(
    ({ slug, card }) => ({
      id: slug,
      ...card,
    }),
  );
};

export const getAllFeatures = () => {
  return FEATURES.map(({ slug, card }) => ({
    id: slug,
    ...card,
  }));
};

export const getFeatureBySlug = (slug) => {
  return FEATURES.find((feature) => feature.slug === slug) ?? null;
};

export const getPosMenuItems = ({ featuredOnly = false } = {}) => {
  return FEATURES.filter(
    (feature) => !featuredOnly || feature.isFeatured === true,
  ).map(({ slug, card }) => ({
    icon: card.icon,
    label: card.menuTitle,
    href: `/features/${slug}`,
  }));
};
