export const FORM_FIELDS = [
    { 
        name: "name" as const, 
        label: "Name", 
        placeholder: "Enter your name", 
        icon: "/user.svg",
        required: true
    },
    { 
        name: "email" as const, 
        label: "Email", 
        placeholder: "Enter your email", 
        icon: "/mail.svg",
        required: true
    },
    { 
        name: "phone" as const, 
        label: "Phone", 
        placeholder: "Enter your phone number", 
        icon: "/phone-call.svg",
        required: true
    },
    { 
        name: "position" as const, 
        label: "Position", 
        placeholder: "Enter the position", 
        icon: "/position.svg",
        required: false
    },
    { 
        name: "description" as const, 
        label: "Description", 
        placeholder: "Enter description", 
        icon: "/Description.svg",
        required: false
    },
] as const;

export const STORAGE_KEYS = {
    FORM_DATA: 'form-data-store'
} as const;
