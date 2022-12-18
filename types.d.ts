export type ToastType = {
    id: string;
    body: string;
    options: {
        duration: number;
        type: "warning" | "error" | "success" | "help";
        icon: boolean;
        colorful: boolean;
    };
};
export type ToasterPlacementType = {
    x: "left" | "middle" | "right";
    y: "top" | "bottom";
};
