/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface EventConfig {
  eventName: string;
  catchphrase: string;
  date: string;
  time: string;
  acceptanceTime: string;
  venue: string;
  address: string;
  gmapLink: string;
  estimatedBikes: number;
  googleFormLink: string;
  rainDate: string;
  organizer: string;
}

export interface HighlightItem {
  id: string;
  title: string;
  description: string;
  details?: string[];
  iconName: string;
}

export interface MerchItem {
  id: string;
  title: string;
  price: number;
  description: string;
  limitedCount?: number;
  imageUrl: string;
}

export interface TicketPlan {
  id: string;
  name: string;
  price: number;
  benefits: string[];
  isRecommended: boolean;
}
