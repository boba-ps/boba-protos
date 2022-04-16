"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Equip = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
const Weapon_1 = require("./Weapon");
const Reliquary_1 = require("./Reliquary");
// @generated message type with reflection information, may provide speed optimized methods
class Equip$Type extends runtime_5.MessageType {
    constructor() {
        super("Equip", [
            { no: 1, name: "reliquary", kind: "message", oneof: "detail", T: () => Reliquary_1.Reliquary },
            { no: 2, name: "weapon", kind: "message", oneof: "detail", T: () => Weapon_1.Weapon },
            { no: 3, name: "is_locked", kind: "scalar", T: 8 /*ScalarType.BOOL*/ }
        ]);
    }
    create(value) {
        const message = { detail: { oneofKind: undefined }, isLocked: false };
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* Reliquary reliquary */ 1:
                    message.detail = {
                        oneofKind: "reliquary",
                        reliquary: Reliquary_1.Reliquary.internalBinaryRead(reader, reader.uint32(), options, message.detail.reliquary)
                    };
                    break;
                case /* Weapon weapon */ 2:
                    message.detail = {
                        oneofKind: "weapon",
                        weapon: Weapon_1.Weapon.internalBinaryRead(reader, reader.uint32(), options, message.detail.weapon)
                    };
                    break;
                case /* bool is_locked */ 3:
                    message.isLocked = reader.bool();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_2.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* Reliquary reliquary = 1; */
        if (message.detail.oneofKind === "reliquary")
            Reliquary_1.Reliquary.internalBinaryWrite(message.detail.reliquary, writer.tag(1, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* Weapon weapon = 2; */
        if (message.detail.oneofKind === "weapon")
            Weapon_1.Weapon.internalBinaryWrite(message.detail.weapon, writer.tag(2, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* bool is_locked = 3; */
        if (message.isLocked !== false)
            writer.tag(3, runtime_1.WireType.Varint).bool(message.isLocked);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message Equip
 */
exports.Equip = new Equip$Type();
