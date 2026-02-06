import GodwrotDataModel from "./base-model.mjs";

export default class GodwrotActorBase extends GodwrotDataModel {

  static defineSchema() {
    const fields = foundry.data.fields;
    const requiredInteger = { required: true, nullable: false, integer: true };
    const schema = {};

    schema.health = new fields.SchemaField({
      value: new fields.NumberField({ ...requiredInteger, initial: 6, min: 0 }),
      max: new fields.NumberField({ ...requiredInteger, initial: 6 })
    });

    schema.biography = new fields.StringField({ required: true, blank: true });

    schema.moves = new fields.StringField({ required: true, blank: true });

    return schema;
  }

}
