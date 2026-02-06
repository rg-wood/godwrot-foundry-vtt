import GodwrotActorBase from "./base-actor.mjs";

export default class GodwrotCharacter extends GodwrotActorBase {

  static defineSchema() {
    const fields = foundry.data.fields;
    const requiredInteger = { required: true, nullable: false, integer: true };
    const schema = super.defineSchema();

    schema.attributes = new fields.SchemaField({
      flaw: new fields.SchemaField({
        value: new fields.StringField()
      }),
    });

    schema.abilities = new fields.SchemaField(Object.keys(CONFIG.GODWROT.abilities).reduce((obj, ability) => {
      obj[ability] = new fields.SchemaField({
        value: new fields.NumberField({ ...requiredInteger, initial: 0, min: -3, max: 3 }),
      });
      return obj;
    }, {}));

    return schema;
  }

  prepareDerivedData() {
    for (const key in this.abilities) {
      this.abilities[key].mod = Math.floor((this.abilities[key].value - 10) / 2);
      this.abilities[key].label = game.i18n.localize(CONFIG.GODWROT.abilities[key]) ?? key;
    }
  }

  getRollData() {
    const data = {};

    if (this.abilities) {
      for (let [k,v] of Object.entries(this.abilities)) {
        data[k] = foundry.utils.deepClone(v);
      }
    }

    return data
  }
}
