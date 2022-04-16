"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RoguelikeGadgetInfo = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
// @generated message type with reflection information, may provide speed optimized methods
class RoguelikeGadgetInfo$Type extends runtime_5.MessageType {
    constructor() {
        super("RoguelikeGadgetInfo", [
            { no: 1, name: "cell_config_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 2, name: "cell_type", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 3, name: "cell_state", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 4, name: "cell_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = { cellConfigId: 0, cellType: 0, cellState: 0, cellId: 0 };
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
                case /* uint32 cell_config_id */ 1:
                    message.cellConfigId = reader.uint32();
                    break;
                case /* uint32 cell_type */ 2:
                    message.cellType = reader.uint32();
                    break;
                case /* uint32 cell_state */ 3:
                    message.cellState = reader.uint32();
                    break;
                case /* uint32 cell_id */ 4:
                    message.cellId = reader.uint32();
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
        /* uint32 cell_config_id = 1; */
        if (message.cellConfigId !== 0)
            writer.tag(1, runtime_1.WireType.Varint).uint32(message.cellConfigId);
        /* uint32 cell_type = 2; */
        if (message.cellType !== 0)
            writer.tag(2, runtime_1.WireType.Varint).uint32(message.cellType);
        /* uint32 cell_state = 3; */
        if (message.cellState !== 0)
            writer.tag(3, runtime_1.WireType.Varint).uint32(message.cellState);
        /* uint32 cell_id = 4; */
        if (message.cellId !== 0)
            writer.tag(4, runtime_1.WireType.Varint).uint32(message.cellId);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message RoguelikeGadgetInfo
 */
exports.RoguelikeGadgetInfo = new RoguelikeGadgetInfo$Type();
