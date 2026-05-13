---
source_path: "documentation/Accelerate/bnnslayerparameterslstm/output-descriptor.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/accelerate/bnnslayerparameterslstm/output-descriptor"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:outputdescriptor:0000:0001">output_descriptor</span>

<span class="ko-segment" data-segment-id="seg:paragraph:outputdescriptor:0001:0001">**Framework**: Accelerate **Kind**: property</span>

<span class="ko-segment" data-segment-id="seg:paragraph:outputdescriptor:0002:0001">출력, hidden output 및 cell-state 출력 데이터의 디스크립터입니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:outputdescriptor:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:outputdescriptor:0004:0001">iOS 14.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:outputdescriptor:0004:0002">iPadOS 14.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:outputdescriptor:0004:0003">Mac Catalyst 14.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:outputdescriptor:0004:0004">macOS 11.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:outputdescriptor:0004:0005">tvOS 14.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:outputdescriptor:0004:0006">visionOS 1.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:outputdescriptor:0004:0007">watchOS 7.0+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
var output_descriptor: BNNSLSTMDataDescriptor
```

#### <span class="ko-segment" data-segment-id="seg:heading:discussion:0007:0001">Discussion</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0008:0001">이 디스크립터의 레이아웃은 다음 두 가지 중 하나로 정의해야 합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:discussion:0009:0001"><code>[</code>BNNSDataLayoutSNE`<code>](bnnsdatalayoutsne.md)의 모양이 (</code>num_directions*<a href="bnnslayerparameterslstm/hidden_size.md">@@TOKEN_2@@</a><code>,</code><a href="bnnslayerparameterslstm/batch_size.md">@@TOKEN_4@@</a><code>,</code><a href="bnnslayerparameterslstm/seq_len.md">@@TOKEN_6@@</a>)인 형식으로 사용합니다.</span>
- <span class="ko-segment" data-segment-id="seg:list:discussion:0009:0002"><code>[</code>BNNSDataLayoutNSE`<code>](bnnsdatalayoutnse.md)의 모양이 (</code>num_directions*<a href="bnnslayerparameterslstm/hidden_size.md">@@TOKEN_2@@</a><code>,</code><a href="bnnslayerparameterslstm/seq_len.md">@@TOKEN_4@@</a><code>,</code><a href="bnnslayerparameterslstm/batch_size.md">@@TOKEN_6@@</a>)인 형식으로 사용합니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0010:0001">BNNS는 첫 번째 차원을 주요 차원으로 <a href="bnnslayerparameterslstm/hidden_size.md">@@TOKEN_0@@</a>를 사용해 2D 배열로 해석할 수 있습니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:discussion:0010:0002">즉, BNNS는 차원을 형상 <code>[num_directions][</code> <a href="bnnslayerparameterslstm/hidden_size.md">@@TOKEN_1@@</a> <code>]</code>의 C 배열로 해석할 수 있습니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0011:0001"><a href="bnnslayerparameterslstm/lstm_flags.md">@@TOKEN_0@@</a>에 <a href="bnnslayerflagslstmbidirectional.md">@@TOKEN_1@@</a>가 포함된 경우, BNNS는 <code>num_directions</code>를 <code>2</code>로 정의하고, 그렇지 않으면 <code>1</code>로 정의합니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0012:0001">레이아웃을 지정하지 않으면 BNNS는 <a href="bnnsdatalayoutsne.md">@@TOKEN_0@@</a>을 사용합니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0013:0001"><code>[</code>hidden_desc<code>](bnnslstmdatadescriptor/hidden_desc.md)</code> 및 <code>[</code>cell_state_desc<code>](bnnslstmdatadescriptor/cell_state_desc.md)</code> 디스크립터의 계층은 C 스타일 다차원 배열 표기법으로 <code>[num_layers][num_directions][batch_size][hidden_size]</code>처럼 정의합니다.</span>

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0014:0001">참고 항목</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0015:0001"><a href="bnnslayerparameterslstm/input_size.md">var input_size: Int</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0016:0001">입력의 요소 수입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0017:0001"><a href="bnnslayerparameterslstm/hidden_size.md">var hidden_size: Int</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0018:0001">히든 상태의 요소 수입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0019:0001"><a href="bnnslayerparameterslstm/batch_size.md">var batch_size: Int</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0020:0001">입력 및 출력 샘플의 수입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0021:0001"><a href="bnnslayerparameterslstm/num_layers.md">var num_layers: Int</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0022:0001">스택된 긴 단기 기억(LSTM) 계층의 수입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0023:0001"><a href="bnnslayerparameterslstm/seq_len.md">var seq_len: Int</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0024:0001">시퀀스 입력의 크기입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0025:0001"><a href="bnnslayerparameterslstm/dropout.md">var dropout: Float</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0026:0001">LSTM 계층 간에 적용할 드롭아웃 비율입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0027:0001"><a href="bnnslayerparameterslstm/lstm_flags.md">var lstm_flags: UInt32</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0028:0001">긴 단기 기억(LSTM) 계층의 동작을 제어하는 플래그입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0029:0001"><a href="bnnslayerparameterslstm/sequence_descriptor.md">var sequence_descriptor: BNNSNDArrayDescriptor</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0030:0001">각 단계마다 배치 크기를 결정하는 부호 없는 정수 요소로 구성된 1D 배열입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0031:0001"><a href="bnnslayerparameterslstm/input_descriptor.md">var input_descriptor: BNNSLSTMDataDescriptor</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0032:0001">입력, 히든 입력, cell-state 입력 데이터의 디스크립터입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0033:0001"><a href="bnnslayerparameterslstm/input_gate.md">var input_gate: BNNSLSTMGateDescriptor</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0034:0001">기본 sigmoid 활성화를 사용하는 입력 게이트의 디스크립터입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0035:0001"><a href="bnnslayerparameterslstm/forget_gate.md">var forget_gate: BNNSLSTMGateDescriptor</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0036:0001">기본 sigmoid 활성화를 사용하는 포겟 게이트의 디스크립터입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0037:0001"><a href="bnnslayerparameterslstm/candidate_gate.md">var candidate_gate: BNNSLSTMGateDescriptor</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0038:0001">기본 tanh 활성화를 사용하는 후보 게이트의 디스크립터입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0039:0001"><a href="bnnslayerparameterslstm/output_gate.md">var output_gate: BNNSLSTMGateDescriptor</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0040:0001">기본 sigmoid 활성화를 사용하는 출력 게이트의 디스크립터입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0041:0001"><a href="bnnslayerparameterslstm/hidden_activation.md">var hidden_activation: BNNSActivation</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0042:0001">기본으로 tanh 활성화를 사용하는 히든 활성화 함수입니다.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0044:0001">*<a href="https://developer.apple.com/documentation/accelerate/bnnslayerparameterslstm/output_descriptor">View on Apple Developer</a>*</span>
