export const preloadHandlebarsTemplates = async function () {
  return loadTemplates([
    'systems/godwrot/templates/actor/parts/actor-features.hbs',
    'systems/godwrot/templates/item/parts/item-effects.hbs',
  ]);
};
