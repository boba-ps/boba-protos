"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AnimatorParameterValueInfoPair = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
const AnimatorParameterValueInfo_1 = require("./AnimatorParameterValueInfo");
// @generated message type with reflection information, may provide speed optimized methods
class AnimatorParameterValueInfoPair$Type extends runtime_5.MessageType {
    constructor() {
        super("AnimatorParameterValueInfoPair", [
            { no: 1, name: "name_id", kind: "scalar", T: 5 /*ScalarType.INT32*/ },
            { no: 2, name: "animator_para", kind: "message", T: () => AnimatorParameterValueInfo_1.AnimatorParameterValueInfo }
        ]);
    }
    create(value) {
        const message = { nameId: 0 };
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
                case /* int32 name_id */ 1:
                    message.nameId = reader.int32();
                    break;
                case /* AnimatorParameterValueInfo animator_para */ 2:
                    message.animatorPara = AnimatorParameterValueInfo_1.AnimatorParameterValueInfo.internalBinaryRead(reader, reader.uint32(), options, message.animatorPara);
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
        /* int32 name_id = 1; */
        if (message.nameId !== 0)
            writer.tag(1, runtime_1.WireType.Varint).int32(message.nameId);
        /* AnimatorParameterValueInfo animator_para = 2; */
        if (message.animatorPara)
            AnimatorParameterValueInfo_1.AnimatorParameterValueInfo.internalBinaryWrite(message.animatorPara, writer.tag(2, runtime_1.WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message AnimatorParameterValueInfoPair
 */
exports.AnimatorParameterValueInfoPair = new AnimatorParameterValueInfoPair$Type();
