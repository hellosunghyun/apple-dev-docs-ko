---
source_path: "documentation/Accelerate/bnnslayerparameterslstm/output-gate.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/accelerate/bnnslayerparameterslstm/output-gate"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:outputgate:0000:0001">output_gate</span>

<span class="ko-segment" data-segment-id="seg:paragraph:outputgate:0001:0001">**Framework**: Accelerate **Kind**: property</span>

<span class="ko-segment" data-segment-id="seg:paragraph:outputgate:0002:0001">기본 sigmoid 활성화를 사용하는 출력 게이트의 디스크립터입니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:outputgate:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:outputgate:0004:0001">iOS 14.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:outputgate:0004:0002">iPadOS 14.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:outputgate:0004:0003">Mac Catalyst 14.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:outputgate:0004:0004">macOS 11.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:outputgate:0004:0005">tvOS 14.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:outputgate:0004:0006">visionOS 1.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:outputgate:0004:0007">watchOS 7.0+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
var output_gate: BNNSLSTMGateDescriptor
```

#### <span class="ko-segment" data-segment-id="seg:heading:discussion:0007:0001">Discussion</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0008:0001">Use C style multidimensional array notation to order the memory pointers as <code>[</code> <a href="bnnslayerparameterslstm/num_layers.md">@@TOKEN_1@@</a> <code>][num_directions][</code> <a href="bnnslayerparameterslstm/hidden_size.md">@@TOKEN_3@@</a> <code>][</code> <a href="bnnslayerparameterslstm/input_size.md">@@TOKEN_5@@</a> / <a href="bnnslayerparameterslstm/hidden_size.md">@@TOKEN_6@@</a> <code>]</code>.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0009:0001"><a href="bnnslayerparameterslstm/lstm_flags.md">@@TOKEN_0@@</a>에 <a href="bnnslayerflagslstmbidirectional.md">@@TOKEN_1@@</a>가 포함되면 BNNS는 <code>num_directions</code>를 <code>2</code>로, 아니면 <code>1</code>로 정의합니다.</span>

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0010:0001">참고</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0011:0001"><a href="bnnslayerparameterslstm/input_size.md">var input_size: Int</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0012:0001">입력의 요소 개수입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0013:0001"><a href="bnnslayerparameterslstm/hidden_size.md">var hidden_size: Int</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0014:0001">은닉 상태의 요소 개수입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0015:0001"><a href="bnnslayerparameterslstm/batch_size.md">var batch_size: Int</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0016:0001">입력 및 출력 샘플 개수입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0017:0001"><a href="bnnslayerparameterslstm/num_layers.md">var num_layers: Int</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0018:0001">스택된 LSTM(Long Short-Term Memory) 레이어의 수입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0019:0001"><a href="bnnslayerparameterslstm/seq_len.md">var seq_len: Int</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0020:0001">순차 입력의 크기입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0021:0001"><a href="bnnslayerparameterslstm/dropout.md">var dropout: Float</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0022:0001">LSTM(Long Short-Term Memory) 레이어 간에 적용할 드롭아웃 비율입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0023:0001"><a href="bnnslayerparameterslstm/lstm_flags.md">var lstm_flags: UInt32</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0024:0001">LSTM(Long Short-Term Memory) 레이어 동작을 제어하는 플래그입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0025:0001"><a href="bnnslayerparameterslstm/sequence_descriptor.md">var sequence_descriptor: BNNSNDArrayDescriptor</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0026:0001">A 1D array of unsigned-integer elements that determines the batch size for each step.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0027:0001"><a href="bnnslayerparameterslstm/input_descriptor.md">var input_descriptor: BNNSLSTMDataDescriptor</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0028:0001">Descriptors of the input, hidden input, and cell-state input data.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0029:0001"><a href="bnnslayerparameterslstm/output_descriptor.md">var output_descriptor: BNNSLSTMDataDescriptor</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0030:0001">Descriptors of the output, hidden output, and cell-state output data.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0031:0001"><a href="bnnslayerparameterslstm/input_gate.md">var input_gate: BNNSLSTMGateDescriptor</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0032:0001">The descriptor of the input gate, which uses default sigmoid activation.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0033:0001"><a href="bnnslayerparameterslstm/forget_gate.md">var forget_gate: BNNSLSTMGateDescriptor</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0034:0001">The descriptor of the forget gate, which uses default sigmoid activation.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0035:0001"><a href="bnnslayerparameterslstm/candidate_gate.md">var candidate_gate: BNNSLSTMGateDescriptor</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0036:0001">The descriptor of the candidate gate, which uses default tanh activation.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0037:0001"><a href="bnnslayerparameterslstm/hidden_activation.md">var hidden_activation: BNNSActivation</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0038:0001">Hidden activation function, which uses default tanh activation.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0040:0001">*<a href="https://developer.apple.com/documentation/accelerate/bnnslayerparameterslstm/output_gate">View on Apple Developer</a>*</span>
