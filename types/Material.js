"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Material = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
const MaterialDeleteInfo_1 = require("./MaterialDeleteInfo");
// @generated message type with reflection information, may provide speed optimized methods
class Material$Type extends runtime_5.MessageType {
    constructor() {
        super("Material", [
            { no: 1, name: "count", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 2, name: "delete_info", kind: "message", T: () => MaterialDeleteInfo_1.MaterialDeleteInfo }
        ]);
    }
    create(value) {
        const message = { count: 0 };
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
                case /* uint32 count */ 1:
                    message.count = reader.uint32();
                    break;
                case /* MaterialDeleteInfo delete_info */ 2:
                    message.deleteInfo = MaterialDeleteInfo_1.MaterialDeleteInfo.internalBinaryRead(reader, reader.uint32(), options, message.deleteInfo);
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
        /* uint32 count = 1; */
        if (message.count !== 0)
            writer.tag(1, runtime_1.WireType.Varint).uint32(message.count);
        /* MaterialDeleteInfo delete_info = 2; */
        if (message.deleteInfo)
            MaterialDeleteInfo_1.MaterialDeleteInfo.internalBinaryWrite(message.deleteInfo, writer.tag(2, runtime_1.WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message Material
 */
exports.Material = new Material$Type();
