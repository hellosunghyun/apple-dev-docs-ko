---
source_path: "documentation/Accelerate/bnns/applymatrixmultiplication-inputatransposedinputbtransposedoutputalphaworkspacefilterparameters.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/accelerate/bnns/applymatrixmultiplication-inputatransposedinputbtransposedoutputalphaworkspacefilterparameters"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:applymatrixmultiplicationinputatransposedinputbtransposedoutputalphaworkspacefilterparameters:0000:0001">applyMatrixMultiplication(inputA:transposed:inputB:transposed:output:alpha:workspace:filterParameters:)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:applymatrixmultiplicationinputatransposedinputbtransposedoutputalphaworkspacefilterparameters:0001:0001">**Framework**: Accelerate **Kind**: method</span>

<span class="ko-segment" data-segment-id="seg:paragraph:applymatrixmultiplicationinputatransposedinputbtransposedoutputalphaworkspacefilterparameters:0002:0001">Performs a matrix multiplication operation directly on two input matrices.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:applymatrixmultiplicationinputatransposedinputbtransposedoutputalphaworkspacefilterparameters:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:applymatrixmultiplicationinputatransposedinputbtransposedoutputalphaworkspacefilterparameters:0004:0001">iOS 16.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:applymatrixmultiplicationinputatransposedinputbtransposedoutputalphaworkspacefilterparameters:0004:0002">iPadOS 16.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:applymatrixmultiplicationinputatransposedinputbtransposedoutputalphaworkspacefilterparameters:0004:0003">Mac Catalyst ?+</span>
- <span class="ko-segment" data-segment-id="seg:list:applymatrixmultiplicationinputatransposedinputbtransposedoutputalphaworkspacefilterparameters:0004:0004">macOS 13.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:applymatrixmultiplicationinputatransposedinputbtransposedoutputalphaworkspacefilterparameters:0004:0005">tvOS 16.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:applymatrixmultiplicationinputatransposedinputbtransposedoutputalphaworkspacefilterparameters:0004:0006">visionOS ?+</span>
- <span class="ko-segment" data-segment-id="seg:list:applymatrixmultiplicationinputatransposedinputbtransposedoutputalphaworkspacefilterparameters:0004:0007">watchOS 9.0+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
static func applyMatrixMultiplication(inputA: BNNSNDArrayDescriptor, transposed transposeA: Bool, inputB: BNNSNDArrayDescriptor, transposed transposeB: Bool, output: BNNSNDArrayDescriptor, alpha: Float, workspace: UnsafeMutableRawBufferPointer?, filterParameters: BNNSFilterParameters? = nil) throws
```

## <span class="ko-segment" data-segment-id="seg:heading:parameters:0007:0001">Parameters</span>

- <span class="ko-segment" data-segment-id="seg:list:parameters:0008:0001"><code>referenceImages</code>: 주변 환경에서 추적할 알려진 이미지의 배열입니다.</span>
- <span class="ko-segment" data-segment-id="seg:list:parameters:0008:0002"><code>transposeA</code>: A Boolean value that indicates whether the function transposes the last two dimensions of matrix A.</span>
- <span class="ko-segment" data-segment-id="seg:list:parameters:0008:0003"><code>inputB</code>: The descriptor of matrix B.</span>
- <span class="ko-segment" data-segment-id="seg:list:parameters:0008:0004"><code>transposeB</code>: A Boolean value that indicates whether the function transposes the last two dimensions of matrix B.</span>
- <span class="ko-segment" data-segment-id="seg:list:parameters:0008:0005"><code>output</code>: The descriptor of the output.</span>
- <span class="ko-segment" data-segment-id="seg:list:parameters:0008:0006"><code>alpha</code>: A scalar value that scales the result.</span>
- <span class="ko-segment" data-segment-id="seg:list:parameters:0008:0007"><code>workspace</code>: A pointer to a memory region that the function uses as scratch space. This must have a size no less than the value that <a href="bnns/matrixmultiplicationworkspacesize(inputa:transposed:inputb:transposed:output:alpha:filterparameters:">@@TOKEN_1@@</a>.md) returns.</span>
- <span class="ko-segment" data-segment-id="seg:list:parameters:0008:0008"><code>filterParameters</code>: The filter runtime parameters.</span>

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0009:0001">See Also</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0010:0001"><a href="planedetectionprovider/allanchors.md">static let head: ARSkeleton.JointName</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0011:0001">Applies a broadcast matrix multiplication operation directly to two input matrices.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0012:0001"><a href="bnns/broadcastmatrixmultiplylayer.md">class BroadcastMatrixMultiplyLayer</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0013:0001">A layer object that wraps a broadcast matrix multiply filter and manages its deinitialization.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0014:0001"><a href="bnnslayerparametersbroadcastmatmul.md">struct BNNSLayerParametersBroadcastMatMul</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0015:0001">A set of parameters that define a broadcast matrix multiply layer.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0016:0001"><a href="arskeleton/jointname/rightfoot.md">static let rightFoot: ARSkeleton.JointName</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0017:0001">Returns a new broadcast matrix multiply layer.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0018:0001"><a href="arskeleton/jointname/righthand.md">static let rightHand: ARSkeleton.JointName</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0019:0001">Returns the workspace size that a matrix multiply operation requires.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0020:0001"><a href="arskeleton/jointname/rightshoulder.md">static let rightShoulder: ARSkeleton.JointName</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0021:0001">Applies a matrix multiplication operation directly to two input matrices.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0022:0001"><a href="bnns/matrixmultiplicationworkspacesize(inputa:transposed:inputb:transposed:output:alpha:filterparameters:">static func matrixMultiplicationWorkspaceSize(inputA: BNNSNDArrayDescriptor, transposed: Bool, inputB: BNNSNDArrayDescriptor, transposed: Bool, output: BNNSNDArrayDescriptor, alpha: Float, filterParameters: BNNSFilterParameters?) -&gt; Int?</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0023:0001">Returns the workspace size that a matrix multiply operation requires.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0025:0001">*<a href="https://developer.apple.com/documentation/accelerate/bnns/applymatrixmultiplication(inputa:transposed:inputb:transposed:output:alpha:workspace:filterparameters:">View on Apple Developer</a>)*</span>
