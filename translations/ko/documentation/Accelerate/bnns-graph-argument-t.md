---
source_path: "documentation/Accelerate/bnns-graph-argument-t.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/accelerate/bnns-graph-argument-t"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:bnnsgraphargumentt:0000:0001">bnns_graph_argument_t</span>

<span class="ko-segment" data-segment-id="seg:paragraph:bnnsgraphargumentt:0001:0001">**Framework**: Accelerate **Kind**: struct</span>

<span class="ko-segment" data-segment-id="seg:paragraph:bnnsgraphargumentt:0002:0001">입력 또는 출력 인수와 연관된 데이터를 설명합니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:bnnsgraphargumentt:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:bnnsgraphargumentt:0004:0001">iOS ?+</span>
- <span class="ko-segment" data-segment-id="seg:list:bnnsgraphargumentt:0004:0002">iPadOS ?+</span>
- <span class="ko-segment" data-segment-id="seg:list:bnnsgraphargumentt:0004:0003">Mac Catalyst ?+</span>
- <span class="ko-segment" data-segment-id="seg:list:bnnsgraphargumentt:0004:0004">macOS ?+</span>
- <span class="ko-segment" data-segment-id="seg:list:bnnsgraphargumentt:0004:0005">tvOS ?+</span>
- <span class="ko-segment" data-segment-id="seg:list:bnnsgraphargumentt:0004:0006">visionOS ?+</span>
- <span class="ko-segment" data-segment-id="seg:list:bnnsgraphargumentt:0004:0007">watchOS ?+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
struct bnns_graph_argument_t
```

#### <span class="ko-segment" data-segment-id="seg:heading:overview:0007:0001">Overview</span>

<span class="ko-segment" data-segment-id="seg:paragraph:overview:0008:0001"><code>BNNSGraphContextSetArgumentType()</code>에서 지정한 구성에 따라 <code>descriptor</code> 또는 <code>data_ptr</code> 중 하나만 설정해야 합니다.</span>

## <span class="ko-segment" data-segment-id="seg:heading:topics:0009:0001">Topics</span>

### <span class="ko-segment" data-segment-id="seg:heading:initializers:0010:0001">Initializers</span>

- <span class="ko-segment" data-segment-id="seg:list:initializers:0011:0001"><a href="bnns_graph_argument_t/init.md">init()</a></span>

### <span class="ko-segment" data-segment-id="seg:heading:instance-properties:0012:0001">Instance Properties</span>

- <span class="ko-segment" data-segment-id="seg:list:instance-properties:0013:0001"><a href="bnns_graph_argument_t/data_ptr-89cqn.md">var data_ptr: UnsafeMutableRawPointer?</a></span>
- <span class="ko-segment" data-segment-id="seg:list:instance-properties:0013:0002"><a href="bnns_graph_argument_t/data_ptr_size.md">var data_ptr_size: Int</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:instance-properties:0014:0001">size in bytes of <code>data_ptr</code>, if set</span>

- <span class="ko-segment" data-segment-id="seg:list:instance-properties:0015:0001"><a href="bnns_graph_argument_t/descriptor-8d2bd.md">var descriptor: UnsafeMutablePointer&lt;BNNSNDArrayDescriptor&gt;?</a></span>
- <span class="ko-segment" data-segment-id="seg:list:instance-properties:0015:0002"><a href="bnns_graph_argument_t/tensor-6l2lt.md">var tensor: UnsafeMutablePointer&lt;BNNSTensor&gt;?</a></span>

## <span class="ko-segment" data-segment-id="seg:heading:relationships:0016:0001">Relationships</span>

### <span class="ko-segment" data-segment-id="seg:heading:conforms-to:0017:0001">Conforms To</span>

- <span class="ko-segment" data-segment-id="seg:list:conforms-to:0018:0001"><a href="../Swift/Sendable.md">Sendable</a></span>

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0019:0001">See Also</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0020:0001"><a href="bnnsdatatype.md">struct BNNSDataType</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0021:0001">BNNS Data Types.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0022:0001"><a href="bnnssparsityparameters.md">struct BNNSSparsityParameters</a></span>
- <span class="ko-segment" data-segment-id="seg:list:see-also:0022:0002"><a href="bnnssparsitytype.md">struct BNNSSparsityType</a></span>
- <span class="ko-segment" data-segment-id="seg:list:see-also:0022:0003"><a href="bnnstargetsystem.md">struct BNNSTargetSystem</a></span>
- <span class="ko-segment" data-segment-id="seg:list:see-also:0022:0004"><a href="bnnsimagestackdescriptor.md">struct BNNSImageStackDescriptor</a></span>
- <span class="ko-segment" data-segment-id="seg:list:see-also:0022:0005"><a href="bnnsvectordescriptor.md">struct BNNSVectorDescriptor</a></span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0024:0001">*<a href="https://developer.apple.com/documentation/accelerate/bnns_graph_argument_t">View on Apple Developer</a>*</span>
