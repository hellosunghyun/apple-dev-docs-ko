---
source_path: "documentation/Accelerate/bnnsndarrayfullyconnectedsparsifysparsecoo.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/accelerate/bnnsndarrayfullyconnectedsparsifysparsecoo"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:bnnsndarrayfullyconnectedsparsifysparsecoo:0000:0001">BNNSNDArrayFullyConnectedSparsifySparseCOO(_:_:_:_:_:_:_:_:_:)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:bnnsndarrayfullyconnectedsparsifysparsecoo:0001:0001">**Framework**: Accelerate **Kind**: func</span>

<span class="ko-segment" data-segment-id="seg:paragraph:bnnsndarrayfullyconnectedsparsifysparsecoo:0002:0001">표준 좌표 목록(COO) 레이아웃에서 BNNS 완전 연결 계층이 사용하는 기기별 희소 레이아웃으로 희소 텐서를 변환합니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:bnnsndarrayfullyconnectedsparsifysparsecoo:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:bnnsndarrayfullyconnectedsparsifysparsecoo:0004:0001">iOS 16.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:bnnsndarrayfullyconnectedsparsifysparsecoo:0004:0002">iPadOS 16.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:bnnsndarrayfullyconnectedsparsifysparsecoo:0004:0003">Mac Catalyst 16.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:bnnsndarrayfullyconnectedsparsifysparsecoo:0004:0004">macOS 13.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:bnnsndarrayfullyconnectedsparsifysparsecoo:0004:0005">tvOS 16.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:bnnsndarrayfullyconnectedsparsifysparsecoo:0004:0006">visionOS 1.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:bnnsndarrayfullyconnectedsparsifysparsecoo:0004:0007">watchOS 9.0+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
func BNNSNDArrayFullyConnectedSparsifySparseCOO(_ in_dense_shape: UnsafePointer<BNNSNDArrayDescriptor>, _ in_indices: UnsafePointer<BNNSNDArrayDescriptor>, _ in_values: UnsafePointer<BNNSNDArrayDescriptor>, _ out: UnsafeMutablePointer<BNNSNDArrayDescriptor>, _ sparse_params: UnsafePointer<BNNSSparsityParameters>?, _ batch_size: Int, _ workspace: UnsafeMutableRawPointer?, _ workspace_size: Int, _ filter_params: UnsafePointer<BNNSFilterParameters>?) -> Int32
```

#### <span class="ko-segment" data-segment-id="seg:heading:discussion:0007:0001">Discussion</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0008:0001">딥러닝의 에너지 및 성능 비용이 증가함에 따라 메모리 사용량과 계산 오버헤드를 최소화하기 위해 더 효율적인 모델 설계가 가속화되고 있습니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:discussion:0008:0002">희소성은 모델 크기를 크게 줄이면서 정확도를 크게 손실하지 않고 계산, 저장, 에너지 효율을 높이는 널리 사용되는 방식입니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0009:0001">Pruning은 가중치와 같은 매개변수를 희소하게 만드는 기본 기법입니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:discussion:0009:0002">파라미터를 가지치기하면 일부 값을 0으로 설정하며, 0이 아닌 값만 저장되어 추론에 참여합니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0010:0001">매개변수 희소화 프레임워크는 값의 크기와 위치를 기반으로 값을 가지치기합니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:discussion:0010:0002">성능 향상을 최대화하려면 가지치기한 값을 청크로 묶어 CPU가 전체 타일을 건너뛰어 읽도록 해야 합니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0011:0001">BNNS는 표준 희소 레이아웃인 좌표 목록(COO)이나 압축 희소 행(CSR) 형식을 직접 지원하지 않습니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:discussion:0011:0002">대신 BNNS는 완전 연결과 같은 기존 머신러닝 프리미티브에서 사용할 수 있도록 COO 및 CSR 데이터를 최적화된 불투명 레이아웃으로 변환하는 함수를 제공합니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0012:0001">``<code>swift
 1.0,  0.0,  0.0,  0.0,  0.0,  0.0,  0.0,  0.0,  0.0,  0.0,  0.0,  0.0,  0.0,  0.0,  0.0,  0.0
 0.0,  2.0,  0.0,  0.0,  0.0,  0.0,  0.0,  0.0,  0.0,  0.0,  0.0,  0.0,  0.0,  0.0,  0.0,  0.0
 0.0,  0.0,  3.0,  0.0,  0.0,  0.0,  0.0,  0.0,  0.0,  0.0,  0.0,  0.0,  0.0,  0.0,  0.0,  0.0
 0.0,  0.0,  0.0,  4.0,  0.0,  0.0,  0.0,  0.0,  0.0,  0.0,  0.0,  0.0,  0.0,  0.0,  0.0,  0.0
 0.0,  0.0,  0.0,  0.0,  5.0,  0.0,  0.0,  0.0,  0.0,  0.0,  0.0,  0.0,  0.0,  0.0,  0.0,  0.0
 0.0,  0.0,  0.0,  0.0,  0.0,  6.0,  0.0,  0.0,  0.0,  0.0,  0.0,  0.0,  0.0,  0.0,  0.0,  0.0
 0.0,  0.0,  0.0,  0.0,  0.0,  0.0,  7.0,  0.0,  0.0,  0.0,  0.0,  0.0,  0.0,  0.0,  0.0,  0.0
 0.0,  0.0,  0.0,  0.0,  0.0,  0.0,  0.0,  8.0,  0.0,  0.0,  0.0,  0.0,  0.0,  0.0,  0.0,  0.0
 0.0,  0.0,  0.0,  0.0,  0.0,  0.0,  0.0,  0.0,  9.0,  0.0,  0.0,  0.0,  0.0,  0.0,  0.0,  0.0
 0.0,  0.0,  0.0,  0.0,  0.0,  0.0,  0.0,  0.0,  0.0, 10.0,  0.0,  0.0,  0.0,  0.0,  0.0,  0.0
 0.0,  0.0,  0.0,  0.0,  0.0,  0.0,  0.0,  0.0,  0.0,  0.0, 11.0,  0.0,  0.0,  0.0,  0.0,  0.0
 0.0,  0.0,  0.0,  0.0,  0.0,  0.0,  0.0,  0.0,  0.0,  0.0,  0.0, 12.0,  0.0,  0.0,  0.0,  0.0
 0.0,  0.0,  0.0,  0.0,  0.0,  0.0,  0.0,  0.0,  0.0,  0.0,  0.0,  0.0, 13.0,  0.0,  0.0,  0.0
 0.0,  0.0,  0.0,  0.0,  0.0,  0.0,  0.0,  0.0,  0.0,  0.0,  0.0,  0.0,  0.0, 14.0,  0.0,  0.0
 0.0,  0.0,  0.0,  0.0,  0.0,  0.0,  0.0,  0.0,  0.0,  0.0,  0.0,  0.0,  0.0,  0.0, 15.0,  0.0
 0.0,  0.0,  0.0,  0.0,  0.0,  0.0,  0.0,  0.0,  0.0,  0.0,  0.0,  0.0,  0.0,  0.0,  0.0, 16.0
</code>``</span>

```swift
 1.0,  0.0,  0.0,  0.0,  0.0,  0.0,  0.0,  0.0,  0.0,  0.0,  0.0,  0.0,  0.0,  0.0,  0.0,  0.0
 0.0,  2.0,  0.0,  0.0,  0.0,  0.0,  0.0,  0.0,  0.0,  0.0,  0.0,  0.0,  0.0,  0.0,  0.0,  0.0
 0.0,  0.0,  3.0,  0.0,  0.0,  0.0,  0.0,  0.0,  0.0,  0.0,  0.0,  0.0,  0.0,  0.0,  0.0,  0.0
 0.0,  0.0,  0.0,  4.0,  0.0,  0.0,  0.0,  0.0,  0.0,  0.0,  0.0,  0.0,  0.0,  0.0,  0.0,  0.0
 0.0,  0.0,  0.0,  0.0,  5.0,  0.0,  0.0,  0.0,  0.0,  0.0,  0.0,  0.0,  0.0,  0.0,  0.0,  0.0
 0.0,  0.0,  0.0,  0.0,  0.0,  6.0,  0.0,  0.0,  0.0,  0.0,  0.0,  0.0,  0.0,  0.0,  0.0,  0.0
 0.0,  0.0,  0.0,  0.0,  0.0,  0.0,  7.0,  0.0,  0.0,  0.0,  0.0,  0.0,  0.0,  0.0,  0.0,  0.0
 0.0,  0.0,  0.0,  0.0,  0.0,  0.0,  0.0,  8.0,  0.0,  0.0,  0.0,  0.0,  0.0,  0.0,  0.0,  0.0
 0.0,  0.0,  0.0,  0.0,  0.0,  0.0,  0.0,  0.0,  9.0,  0.0,  0.0,  0.0,  0.0,  0.0,  0.0,  0.0
 0.0,  0.0,  0.0,  0.0,  0.0,  0.0,  0.0,  0.0,  0.0, 10.0,  0.0,  0.0,  0.0,  0.0,  0.0,  0.0
 0.0,  0.0,  0.0,  0.0,  0.0,  0.0,  0.0,  0.0,  0.0,  0.0, 11.0,  0.0,  0.0,  0.0,  0.0,  0.0
 0.0,  0.0,  0.0,  0.0,  0.0,  0.0,  0.0,  0.0,  0.0,  0.0,  0.0, 12.0,  0.0,  0.0,  0.0,  0.0
 0.0,  0.0,  0.0,  0.0,  0.0,  0.0,  0.0,  0.0,  0.0,  0.0,  0.0,  0.0, 13.0,  0.0,  0.0,  0.0
 0.0,  0.0,  0.0,  0.0,  0.0,  0.0,  0.0,  0.0,  0.0,  0.0,  0.0,  0.0,  0.0, 14.0,  0.0,  0.0
 0.0,  0.0,  0.0,  0.0,  0.0,  0.0,  0.0,  0.0,  0.0,  0.0,  0.0,  0.0,  0.0,  0.0, 15.0,  0.0
 0.0,  0.0,  0.0,  0.0,  0.0,  0.0,  0.0,  0.0,  0.0,  0.0,  0.0,  0.0,  0.0,  0.0,  0.0, 16.0
```

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0014:0001">동일한 값을 COO 형식으로는 비영(0이 아닌) 값 배열, 열 인덱스 배열, 행 인덱스 배열의 세 배열로 표현할 수 있습니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:discussion:0014:0002">BNNS는 열 인덱스와 행 인덱스가 교차된 형태를 요구합니다.</span>

```swift
let weightsData: [Float] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16]

let columnIndices: [Int32] = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]
let rowIndices: [Int32]    = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]

let indices: [Int32] = zip(columnIndices, rowIndices).flatMap { [$0, $1] }
        
let nnz = weightsData.count        
var inputWeights = BNNSNDArrayDescriptor.allocate(initializingFrom: weightsData,
                                                  shape: .vector(nnz))
```

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0016:0001">완전 연결에 대해 COO 가중치를 BNNS opaque 형식으로 변환하려면 입력 가중치 모양과 인덱스의 배열 설명자를 생성한 뒤 <a href="bnnsndarrayfullyconnectedsparsifysparsecoo(_:_:_:_:_:_:_:_:_:">@@TOKEN_0@@</a>.md)를 호출합니다.</span>

```swift
var inputDenseShape = BNNSNDArrayDescriptor(dataType: BNNSDataType.float,
                                            shape: .matrixRowMajor(16, 16))
var inputIndices = BNNSNDArrayDescriptor.allocate(initializingFrom: indices,
                                                  shape: .matrixRowMajor(nnz, 2))

var sparsifiedWeights = BNNSNDArrayDescriptor()

var sparseParams = BNNSSparsityParameters()
BNNSNDArrayFullyConnectedSparsifySparseCOO(&inputDenseShape,
                                           &inputIndices,
                                           &inputWeights,
                                           &sparsifiedWeights,
                                           &sparseParams,
                                           1,
                                           nil, nil)
```

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0018:0001">반환 시 <code>sparsifiedWeights</code>에는 <a href="bnnslayerparametersfullyconnected.md">@@TOKEN_1@@</a>에 전달할 가중치가 포함됩니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:discussion:0018:0002">이 예제에서 <code>sparsifiedWeights</code>의 데이터 크기는 144 바이트입니다.</span>

## <span class="ko-segment" data-segment-id="seg:heading:parameters:0019:0001">Parameters</span>

- <span class="ko-segment" data-segment-id="seg:list:parameters:0020:0001"><code>in_dense_shape</code>: 입력 배열의 dense shape(즉 크기와 레이아웃)을 지정하는 배열 설명자입니다.</span>
- <span class="ko-segment" data-segment-id="seg:list:parameters:0020:0002"><code>in_indices</code>: 입력 nonzero 값의 교차 인덱스를 포함하는 <code>[NNZ, rank]</code> 모양의 2D 배열 설명자입니다. 행 우선(row-major) 순서에서는 짝수 요소가 열 인덱스에, 홀수 요소가 행 인덱스에 해당합니다. 열 우선(column-major) 순서에서는 짝수 요소가 행 인덱스에, 홀수 요소가 열 인덱스에 해당합니다.</span>
- <span class="ko-segment" data-segment-id="seg:list:parameters:0020:0003"><code>in_values</code>: nonzero 입력 값을 포함하는 <code>[NNZ]</code> 모양의 1D 배열 설명자입니다.</span>
- <span class="ko-segment" data-segment-id="seg:list:parameters:0020:0004"><code>out</code>: 반환 시 장치 최적화된 BNNS sparse fully connected 가중치를 포함하는 배열 설명자입니다.</span>
- <span class="ko-segment" data-segment-id="seg:list:parameters:0020:0005"><code>sparse_params</code>: 희소성 패턴에 대한 힌트를 제공하는 선택적 데이터 구조입니다.</span>
- <span class="ko-segment" data-segment-id="seg:list:parameters:0020:0006"><code>batch_size</code>: 예상 배치 크기입니다.</span>
- <span class="ko-segment" data-segment-id="seg:list:parameters:0020:0007"><code>workspace</code>: dense 입력 크기의 최소 두 배 이상의 scratch memory를 가리키는 선택적 포인터입니다. <code>nil</code>로 설정하면 BNNS가 필요한 scratch memory를 할당하고 해제하도록 지정합니다.</span>
- <span class="ko-segment" data-segment-id="seg:list:parameters:0020:0008"><code>workspace_size</code>: 전달한 scratch memory의 크기를 바이트 단위로 지정합니다. <code>workspace</code>가 <code>nil</code>인 경우 이 함수는 <code>workspace_size</code> 매개변수를 무시합니다.</span>
- <span class="ko-segment" data-segment-id="seg:list:parameters:0020:0009"><code>filter_params</code>: 런타임 필터 매개변수입니다.</span>

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0021:0001">참고 항목</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0022:0001"><a href="bnnsndarraygetdatasize(_:">func BNNSNDArrayGetDataSize(UnsafePointer&lt;BNNSNDArrayDescriptor&gt;) -&gt; Int</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0023:0001">배열 설명자가 요구하는 크기를 바이트 단위로 반환합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0024:0001"><a href="bnnsndarrayfullyconnectedsparsifysparsecsr(_:_:_:_:_:_:_:_:_:_:">func BNNSNDArrayFullyConnectedSparsifySparseCSR(UnsafePointer&lt;BNNSNDArrayDescriptor&gt;, UnsafePointer&lt;BNNSNDArrayDescriptor&gt;, UnsafePointer&lt;BNNSNDArrayDescriptor&gt;, UnsafePointer&lt;BNNSNDArrayDescriptor&gt;, UnsafeMutablePointer&lt;BNNSNDArrayDescriptor&gt;, UnsafePointer&lt;BNNSSparsityParameters&gt;?, Int, UnsafeMutableRawPointer?, Int, UnsafePointer&lt;BNNSFilterParameters&gt;?) -&gt; Int32</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0025:0001">표준화된 압축 희소 행렬(CSR) 레이아웃의 희소 텐서를 BNNS fully connected 레이어가 사용하는 장치별 희소 레이아웃으로 변환합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0026:0001"><a href="bnns/fullyconnectedlayer/sparsify(batchsize:inputlayout:inputdenseshape:inputvalues:output:sparseparameters:workspace:filterparameters:">static func sparsify(batchSize: Int, inputLayout: BNNS.SparseLayout, inputDenseShape: BNNSNDArrayDescriptor, inputValues: BNNSNDArrayDescriptor, output: inout BNNSNDArrayDescriptor, sparseParameters: BNNS.SparseParameters?, workspace: UnsafeMutableRawBufferPointer?, filterParameters: BNNSFilterParameters?) throws</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0027:0001">표준화된 희소 레이아웃의 희소 텐서를 Fully Connected가 사용하는 장치별 희소 레이아웃으로 변환합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0028:0001"><a href="bnns/sparseparameters.md">struct SparseParameters</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0029:0001">sparsity 함수에 대한 힌트를 제공하는 데이터 구조입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0030:0001"><a href="bnns/sparselayout.md">BNNS.SparseLayout</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0031:0001">BNNS가 opaque로 변환할 수 있는 표준화된 희소 레이아웃을 지정하는 상수입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0032:0001"><a href="bnns/sparsitytype.md">BNNS.SparsityType</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0033:0001">sparsity의 패턴을 지정하는 상수입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0034:0001"><a href="bnnssparsitytypeunstructured.md">var BNNSSparsityTypeUnstructured: BNNSSparsityType</a></span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0036:0001">*<a href="https://developer.apple.com/documentation/accelerate/bnnsndarrayfullyconnectedsparsifysparsecoo(_:_:_:_:_:_:_:_:_:">Apple Developer에서 보기</a>)*</span>
