import AutoReplyIcon from '@/app/components/ui/icons/AutoReplyIcon'
import CampaignIcon from '@/app/components/ui/icons/CampaignIcon'
import BroadcastIcon from '@/app/components/ui/icons/BroadcastIcon'
import ContactIcon from '@/app/components/ui/icons/ContactIcon'
import DeviceIcon from '@/app/components/ui/icons/DeviceIcon'
import ExcelImportIcon from '@/app/components/ui/icons/ExcelImportIcon'
import GoogleContactSyncIcon from '@/app/components/ui/icons/GoogleContactSyncIcon'

export const sidebarNav = [
    {
        id: 1,
        title: 'Get Started',
        href: '#getstarted'
    },
    {
        id: 2,
        title: 'Broadcast',
        href: '#broadcast'
    },
    {
        id: 3,
        title: 'Campaign',
        href: '#campaign'
    },
    {
        id: 4,
        title: 'Auto Reply',
        href: '#autoreply'
    },
    {
        id: 5,
        title: 'Opportunity',
        href: '#opportunity'
    },
    {
        id: 6,
        title: 'Pricing',
        href: '#pricing'
    },
    {
        id: 7,
        title: 'FAQ',
        href: '#faq'
    },
    {
        id: 8,
        title: 'Contact Us',
        href: '#contactus'
    }
]

export const pricingData = [
    {
        id: 1,
        title: 'starter',
        description: 'Mulai perjalanan Anda dengan paket Starter selama 14 hari. Nikmati pesan otomatis, siaran pesan, dan  manajemen kontak yang efisien. Dapatkan integrasi yang membantu dan sinkronisasi kontak WhatsApp.',
        pricePerMonth: null,
        pricePerYear: null,
    },
    {
        id: 2,
        title: 'basic',
        description: 'Dapatkan akses selama 1 bulan dengan paket Basic. Manfaatkan fitur pesan otomatis, siaran pesan, dan manajemen kontak yang ditingkatkan. Rasakan kenyamanan integrasi yang luas dengan sinkronisasi kontak Google dan WhatsApp.',
        pricePerMonth: 65000,
        pricePerYear: 650000,
    },
    {
        id: 3,
        title: 'premium',
        description: 'Perpanjang pengalaman Anda dengan paket Premium selama 1 bulan. Nikmati manfaat pesan otomatis, siaran pesan, dan manajemen kontak tanpa batasan. Aktifkan integrasi yang luas dengan sinkronisasi kontak Google dan WhatsApp.',
        pricePerMonth: 76000,
        pricePerYear: 800000,
    },
    {
        id: 4,
        title: 'pro',
        description: 'Jelajahi seluruh fitur dengan paket Pro selama 1 bulan. Dapatkan keuntungan dari pesan otomatis, siaran pesan, serta manajemen kontak yang tidak terbatas. Aktifkan integrasi yang luas dengan sinkronisasi kontak Google dan WhatsApp.',
        pricePerMonth: 86000,
        pricePerYear: 900000,
    },
]

export const pricingIcons = [
    {
        id: 1,
        title: 'Auto Reply',
        Icon: AutoReplyIcon
    },
    {
        id: 2,
        title: 'Broadcast',
        Icon: BroadcastIcon
    },
    {
        id: 3,
        title: 'Campaign',
        Icon: CampaignIcon
    },
    {
        id: 4,
        title: 'Contact',
        Icon: ContactIcon
    },
    {
        id: 5,
        title: 'Device',
        Icon: DeviceIcon
    },
    {
        id: 6,
        title: 'Excel / CSV Contact Import ',
        Icon: ExcelImportIcon
    },
    {
        id: 7,
        title: 'Google Contact Sync',
        Icon: GoogleContactSyncIcon
    },
]