const controller = {};
let allTranslations = [];
let allDesriptions = [];

allTranslations["IronOre2"] = "Iron Ore";
allTranslations["IronIngot2"] = "Iron Ingot";
allTranslations["BoneAxeTwoHanded"] = "Rawbone Battle Axe";
allTranslations["ZirconiumMaceTwoHanded"] = "Long Ceramic Hoofmace";
allTranslations["TetheringHarpoon"] = "Flint Harpoon";
allTranslations["ScattershotAmmo"] = "Scattershot";
allTranslations["EquipmentRoot"] = "Equipment";
allTranslations["CraftingRoot"] = "Crafting";
allTranslations["ThrowinNet"] = "Throwing Net";
allTranslations["StoneClub"] = "Jaggertooth Club";
allTranslations["BoneMaceTwoHanded"] = "Rawbone Maul";
allTranslations["AncientStationLootsite"] = "Temporary Fabricator";
allTranslations["Flags"] = "Flag 1";
allTranslations["Baskets"] = "Basket Tall";
allTranslations["Carpets"] = "Carpet Light";
allTranslations["LampsHanging"] = "Lamp Double Hanging";
allTranslations["LampsOverhanging"] = "Lamp Overhanging";
allTranslations["LampsStanding"] = "Lamp Standing";
allTranslations["GiantWalls"] = "Giant Wall";
allTranslations["StoneStructures"] = "Stone Wall";
allTranslations["ClayStructures"] = "Clay Wall";
allTranslations["CementFoundation"] = "Cement Wall 1";
allTranslations["WoodenWallsLight"] = "Light Wood Foundation";
allTranslations["WoodenWallsMedium"] = "Medium Wood Wall";
allTranslations["WoodenWallsHeavy"] = "Heavy Wood Wall 1";
allTranslations["BoneGlueProduction"] = "Bone Glue";
allTranslations["SimpleWaterPurification"] = "Purified Water";
allTranslations["WaterFiltration"] = "Purification Station";
allTranslations["SulfurWaterPurification"] = "Liquid Fuel";
allTranslations["ClayExtraction"] = "Clay";
allTranslations["Resin"] = "Earth Wax";
allTranslations["BoneProjectiles"] = "Bone Bolt";
allTranslations["CeramicProjectiles"] = "Ceramic-Tipped Bolt";
allTranslations["MetalProjectiles"] = "Iron-Tipped Bolt";
allTranslations["ExplosiveBolt"] = "Explosive Bolt";
allTranslations["ExplosiveDart"] = "Explosive Dart";
allTranslations["FloatingMine"] = "Floating Mine";
allTranslations["Flare"] = "Flare - White";
allTranslations["ImprovedBackpacks"] = "Medium Backpack";
allTranslations["SimpleBackpacks"] = "Light Backpack";
allTranslations["AdvancedBackpacks"] = "Heavy Backpack";
allTranslations["OnaHandedLavaMace"] = "Firestone Bludgeon";
allTranslations["OneHandedTtitaniumMace"] = "Nibiran Hammer";
allTranslations["BonePolearmTwoHanded"] = "Spikebone Maul";
allTranslations["VitaminsRoot"] = "Vitamins";
allTranslations["BasicWalkerEquipment"] = "Steering Levers";
allTranslations["BirdWalker"] = "Raptor Sky Walker";
allTranslations["SpiderWalker"] = "Spider Walker";
allTranslations["SpiderWalkerNomad"] = "Nomad Spider Walker";
allTranslations["SpiderWalkerBallista"] = "Spider Walker With Ballista";
allTranslations["WalkerBarriers"] = "Barrier Base";
allTranslations["WalkersRoot"] = "Walkers";
allTranslations["ConstructionRoot"] = "Construction";
allTranslations["ReinforcedPlank2"] = "Reinforced Plank";
allTranslations["BedSand"] = "Sand Bed";

allTranslations["Woodworking_Tier2"] = "Advanced Woodworking Station";
allTranslations["Woodworking_Tier3"] = "Artificer Woodworking Station";
allTranslations["FiberworkingTier_02"] = "Advanced Fiberworking Station";
allTranslations["Fiberworking"] = "Fiberworking Station";
allTranslations["Purification"] = "Purification Station";
allTranslations["Stomping"] = "Stomping Station";
allTranslations["Woodworking"] = "Woodworking Station";

allTranslations["GunPod"] = "Gun Pod";
allTranslations["GunPodShell"] = "Gun Pod Shell";

allTranslations["Ballista_T3"] = "Ballista - Tier 3";
allTranslations["Ballista_T2"] = "Ballista - Tier 2";

allTranslations["Dinghy"] = "Dinghy Walker";
allTranslations["Firefly"] = "Firefly Walker";
allTranslations["Proxy"] = "Proxy Walker";
allTranslations["Raptor"] = "Raptor Sky Walker";
allTranslations["Buffalo"] = "Buffalo Walker";
allTranslations["Battleship"] = "Battleship Walker";
allTranslations["Camelop"] = "Camelop Walker";
allTranslations["Hornet"] = "Hornet Walker";
allTranslations["Tusker"] = "Tusker Walker";
allTranslations["Titan"] = "Titan Walker";
allTranslations["Falco"] = "Falco Walker";
allTranslations["Hercul"] = "Hercul Walker";
allTranslations["Spider"] = "Nomad Spider Walker";
allTranslations["Nomad Walker"] = "Nomad Spider Walker";
allTranslations["Spider Walker"] = "Nomad Spider Walker";
allTranslations["Nomad"] = "Nomad Spider Walker";
allTranslations["Stiletto"] = "Stiletto Walker";
allTranslations["Silur"] = "Silur Walker";
allTranslations["Balang"] = "Balang Walker";
allTranslations["Cobra"] = "Cobra Walker";
allTranslations["Panda"] = "Panda Walker";
allTranslations["Domus"] = "Domus Walker";
allTranslations["Mollusk"] = "Mollusk Walker";
allTranslations["Raptor Walker"] = "Raptor Sky Walker";
allTranslations["Schmetterling"] = "Schmetterling Walker";
allTranslations["Toboggan"] = "Toboggan Walker";

controller.translateName = (name) => {
  if (name != null && allTranslations[name]) {
    return allTranslations[name].trim();
  }
  return name.trim();
};

controller.searchName = (name) => {
  if (name != null && allTranslations[name]) {
    return allTranslations[name];
  }
  return null;
};

controller.translateItems = (allItems) => {
  return (allItems = allItems.map((item) => {
    let name = item.name;

    if (item.translation) {
      name = item.translation;
    }

    let translateName = controller.searchName(item.translation);
    if (translateName) {
      name = translateName;
    }

    if (
      (name.includes(" Legs") || name.includes(" Wings")) &&
      !name.includes("(1 of 2)")
    ) {
      name = name + " (1 of 2)";
    }

    item.name = name.trim();
    return item;
  }));
};

controller.addDescriptions = (allItems) => {
  return (allItems = allItems.map((item) => {
    let name = item.name;
    if (item.translation) {
      name = item.translation;
    }

    if (allDesriptions[name]) {
      item.description = allDesriptions[name].trim();
    }

    return item;
  }));
};

controller.addTranslation = (key, translation) => {
  allTranslations[key] = translation;
};

controller.addDescription = (key, description) => {
  allDesriptions[key] = description;
};

module.exports = controller;