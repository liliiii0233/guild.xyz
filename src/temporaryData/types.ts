type CoingeckoToken = {
  chainId: number
  address: string
  name: string
  symbol: string
  decimals: number
  logoURI: string
}

type Poap = {
  id: number
  fancy_id: string
  name: string
  event_url?: string
  image_url: string
  country?: string
  city?: string
  description?: string
  year: number
  start_date: string
  end_date: string
  expiry_date: string
  from_admin: boolean
  virtual_event: boolean
  event_template_id: number
  event_host_id: number
}

type NFT = {
  info: {
    name: string
    type: string
    address: string
    logoURI: string
  }
  metadata: Record<string, Array<string>>
}

type RequirementType =
  | "ETHER"
  | "TOKEN"
  | "NFT"
  | "POAP"
  | "BAYC"
  | "CRYPTOPUNKS"
  | "LOOT"
  | "COOLCATS"
  | "SNAPSHOT"

type Requirement = {
  type: RequirementType
  address?: string
  symbol?: string
  method?: string
  data?: string | Record<string, string | number>
  value: string
}

type Level = {
  id: number
  requirements: Requirement[]
  membersCount?: number
  telegramGroupId?: string
  discordRole?: string
  logic?: "AND" | "OR" | "NOR" | "NAND"
}

type PlatformName = "TELEGRAM" | "DISCORD"

type Platform = {
  name: PlatformName
  active: boolean
  platformId: string
  inviteChannel?: string
}

type User = {
  address: string
}

type Guild = {
  id: number
  name: string
  urlName: string
  imageUrl?: string
  levels: Level[]
  members: number
  owner?: {
    id: number
    addresses: User[]
  }
  communityPlatforms: Platform[]
}

enum RequirementTypeColors {
  NFT = "#4ade80",
  COOLCATS = "#4ade80",
  LOOT = "#4ade80",
  BAYC = "#4ade80",
  CRYPTOPUNKS = "#4ade80", // green.400
  POAP = "#60a5fa", // blue.400
  TOKEN = "#818CF8", // indigo.400
  ETHER = "#818CF8", // indigo.400
  SNAPSHOT = "#ED8936", // orange.400
}

type SnapshotStrategy = {
  name: string
  params: Record<string, Record<string, string>>
}

export type {
  CoingeckoToken,
  Poap,
  User,
  NFT,
  PlatformName,
  Guild,
  Requirement,
  RequirementType,
  SnapshotStrategy,
}
export { RequirementTypeColors }
