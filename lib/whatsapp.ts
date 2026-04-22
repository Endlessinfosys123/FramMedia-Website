import { CartItem } from "./store";

export interface OrderData {
  name: string;
  phone: string;
  address: string;
  items: CartItem[];
  total: number;
  note?: string;
}

export function buildWhatsAppURL(order: OrderData): string {
  const phone = "911234567890"; // Replace with actual business number
  
  const itemsList = order.items
    .map(
      (item) =>
        `• *${item.name}* | Qty: ${item.quantity} | Size: ${item.size || "N/A"} | ₹${item.price}`
    )
    .join("\n");

  const message = `🛍️ *New Order - FrameMedia*

👤 *Name:* ${order.name}
📞 *Phone:* ${order.phone}
📍 *Address:* ${order.address}

📦 *Items:*
${itemsList}

💰 *Total: ₹${order.total}*

📝 *Note:* ${order.note || "None"}

Please confirm my order. Thank you! 🙏`;

  return `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
}
