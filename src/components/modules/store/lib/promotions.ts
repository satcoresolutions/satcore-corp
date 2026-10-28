
export interface PromotionConfig {
    date: string; // Fecha del evento: YYYY-MM-DD
    discountPercent: number;
    preparationDays?: number;
}

export function isPromotionActive(
    promotion?: PromotionConfig,
    now = new Date(),
): boolean {
    if (!promotion || promotion.discountPercent <= 0 ||
        promotion.discountPercent >= 100) {
        return false;
    }

    const eventDate = parseDate(promotion.date);
    if (!eventDate) return false;

    const startDate = new Date(eventDate);
    startDate.setUTCDate(
        startDate.getUTCDate() - (promotion.preparationDays ?? 10),
    );

    const today = new Date(Date.UTC(
        now.getFullYear(),
        now.getMonth(),
        now.getDate(),
    ));

    return today >= startDate && today <= eventDate;
}

export function getPromotionalPrice(
    originalPrice: number,
    discountPercent: number,
): number {
    return Math.round(
        originalPrice * (1 - discountPercent / 100),
    );
}

function parseDate(value: string): Date | null {
    const match = /^(\d{4})-(\d{2})-(\d{2})$/.exec(value);
    if (!match) return null;

    const [, year, month, day] = match;
    const date = new Date(Date.UTC(
        Number(year),
        Number(month) - 1,
        Number(day),
    ));

    if (
        date.getUTCFullYear() !== Number(year) ||
        date.getUTCMonth() !== Number(month) - 1 ||
        date.getUTCDate() !== Number(day)
    ) {
        return null;
    }

    return date;
}
