"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SceneReliquaryInfo = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
// @generated message type with reflection information, may provide speed optimized methods
class SceneReliquaryInfo$Type extends runtime_5.MessageType {
    constructor() {
        super("SceneReliquaryInfo", [
            { no: 1, name: "item_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 2, name: "guid", kind: "scalar", T: 4 /*ScalarType.UINT64*/, L: 0 /*LongType.BIGINT*/ },
            { no: 3, name: "level", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 4, name: "promote_level", kind: "scalar", T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = { itemId: 0, guid: 0n, level: 0, promoteLevel: 0 };
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
                case /* uint32 item_id */ 1:
                    message.itemId = reader.uint32();
                    break;
                case /* uint64 guid */ 2:
                    message.guid = reader.uint64().toBigInt();
                    break;
                case /* uint32 level */ 3:
                    message.level = reader.uint32();
                    break;
                case /* uint32 promote_level */ 4:
                    message.promoteLevel = reader.uint32();
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
        /* uint32 item_id = 1; */
        if (message.itemId !== 0)
            writer.tag(1, runtime_1.WireType.Varint).uint32(message.itemId);
        /* uint64 guid = 2; */
        if (message.guid !== 0n)
            writer.tag(2, runtime_1.WireType.Varint).uint64(message.guid);
        /* uint32 level = 3; */
        if (message.level !== 0)
            writer.tag(3, runtime_1.WireType.Varint).uint32(message.level);
        /* uint32 promote_level = 4; */
        if (message.promoteLevel !== 0)
            writer.tag(4, runtime_1.WireType.Varint).uint32(message.promoteLevel);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message SceneReliquaryInfo
 */
exports.SceneReliquaryInfo = new SceneReliquaryInfo$Type();
