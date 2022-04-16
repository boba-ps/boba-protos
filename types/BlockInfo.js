"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BlockInfo = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
// @generated message type with reflection information, may provide speed optimized methods
class BlockInfo$Type extends runtime_5.MessageType {
    constructor() {
        super("BlockInfo", [
            { no: 1, name: "block_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 2, name: "data_version", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 3, name: "bin_data", kind: "scalar", T: 12 /*ScalarType.BYTES*/ },
            { no: 4, name: "is_dirty", kind: "scalar", T: 8 /*ScalarType.BOOL*/ }
        ]);
    }
    create(value) {
        const message = { blockId: 0, dataVersion: 0, binData: new Uint8Array(0), isDirty: false };
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
                case /* uint32 block_id */ 1:
                    message.blockId = reader.uint32();
                    break;
                case /* uint32 data_version */ 2:
                    message.dataVersion = reader.uint32();
                    break;
                case /* bytes bin_data */ 3:
                    message.binData = reader.bytes();
                    break;
                case /* bool is_dirty */ 4:
                    message.isDirty = reader.bool();
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
        /* uint32 block_id = 1; */
        if (message.blockId !== 0)
            writer.tag(1, runtime_1.WireType.Varint).uint32(message.blockId);
        /* uint32 data_version = 2; */
        if (message.dataVersion !== 0)
            writer.tag(2, runtime_1.WireType.Varint).uint32(message.dataVersion);
        /* bytes bin_data = 3; */
        if (message.binData.length)
            writer.tag(3, runtime_1.WireType.LengthDelimited).bytes(message.binData);
        /* bool is_dirty = 4; */
        if (message.isDirty !== false)
            writer.tag(4, runtime_1.WireType.Varint).bool(message.isDirty);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message BlockInfo
 */
exports.BlockInfo = new BlockInfo$Type();
