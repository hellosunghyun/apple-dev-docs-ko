---
source_path: "documentation/Accelerate/bnnsndarraydescriptor/allocate-randominshapebatchsize-5a2p2.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/accelerate/bnnsndarraydescriptor/allocate-randominshapebatchsize-5a2p2"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:allocaterandominshapebatchsize:0000:0001">allocate(randomIn:shape:batchSize:)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:allocaterandominshapebatchsize:0001:0001">**Framework**: Accelerate **Kind**: method</span>

<span class="ko-segment" data-segment-id="seg:paragraph:allocaterandominshapebatchsize:0002:0001">지정된 범위 내의 임의 값으로 초기화된 새 n차원 배열 디스크립터를 반환합니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:allocaterandominshapebatchsize:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:allocaterandominshapebatchsize:0004:0001">iOS 14.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:allocaterandominshapebatchsize:0004:0002">iPadOS 14.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:allocaterandominshapebatchsize:0004:0003">Mac Catalyst ?+</span>
- <span class="ko-segment" data-segment-id="seg:list:allocaterandominshapebatchsize:0004:0004">macOS 11.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:allocaterandominshapebatchsize:0004:0005">tvOS 14.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:allocaterandominshapebatchsize:0004:0006">visionOS ?+</span>
- <span class="ko-segment" data-segment-id="seg:list:allocaterandominshapebatchsize:0004:0007">watchOS 7.0+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
static func allocate<Scalar>(randomIn range: ClosedRange<Scalar>, shape: BNNS.Shape, batchSize: Int = 1) -> BNNSNDArrayDescriptor where Scalar : BNNSScalar, Scalar : FixedWidthInteger
```

## <span class="ko-segment" data-segment-id="seg:heading:parameters:0007:0001">Parameters</span>

- <span class="ko-segment" data-segment-id="seg:list:parameters:0008:0001"><code>range</code>: 무작위 값을 생성할 범위입니다.</span>
- <span class="ko-segment" data-segment-id="seg:list:parameters:0008:0002"><code>shape</code>: n차원 배열 디스크립터의 모양입니다.</span>
- <span class="ko-segment" data-segment-id="seg:list:parameters:0008:0003"><code>batchSize</code>: 데이터 배치 수입니다.</span>

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0009:0001">참고 항목</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0010:0001"><a href="bnnsndarraydescriptor/allocate(initializingfrom:shape:batchsize:">static func allocate&lt;C&gt;(initializingFrom: C, shape: BNNS.Shape, batchSize: Int) -&gt; BNNSNDArrayDescriptor</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0011:0001">지정한 컬렉션의 요소 복사본으로 초기화된 새 n차원 배열 디스크립터를 반환합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0012:0001"><a href="bnnsndarraydescriptor/allocate(randomuniformusing:range:shape:batchsize:">static func allocate&lt;Scalar&gt;(randomUniformUsing: BNNS.RandomGenerator, range: ClosedRange&lt;Scalar&gt;, shape: BNNS.Shape, batchSize: Int) -&gt; BNNSNDArrayDescriptor?</a>-2rorb.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0013:0001">연속 균일 분포에서 임의의 정수 값으로 초기화된 새 배열 디스크립터를 반환합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0014:0001"><a href="bnnsndarraydescriptor/allocate(randomuniformusing:range:shape:batchsize:">static func allocate&lt;Scalar&gt;(randomUniformUsing: BNNS.RandomGenerator, range: ClosedRange&lt;Scalar&gt;, shape: BNNS.Shape, batchSize: Int) -&gt; BNNSNDArrayDescriptor?</a>-761hg.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0015:0001">연속 균일 분포에서 임의의 부동 소수점 값으로 초기화된 새 배열 디스크립터를 반환합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0016:0001"><a href="bnnsndarraydescriptor/allocate(randomin:shape:batchsize:">static func allocate&lt;Scalar&gt;(randomIn: ClosedRange&lt;Scalar&gt;, shape: BNNS.Shape, batchSize: Int) -&gt; BNNSNDArrayDescriptor</a>-1697a.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0017:0001">지정된 범위 내에서 임의 값을 사용해 초기화되는 새 n차원 배열 디스크립터를 반환합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0018:0001"><a href="bnnsndarraydescriptor/allocate(randomin:using:shape:batchsize:">static func allocate&lt;Scalar, Generator&gt;(randomIn: ClosedRange&lt;Scalar&gt;, using: inout Generator, shape: BNNS.Shape, batchSize: Int) -&gt; BNNSNDArrayDescriptor</a>-5kbi8.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0019:0001">주어진 generator를 난수 소스로 사용해 지정된 범위 내에서 임의 값을 갖는 새 배열 디스크립터를 반환합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0020:0001"><a href="bnnsndarraydescriptor/allocate(randomin:using:shape:batchsize:">static func allocate&lt;Scalar, Generator&gt;(randomIn: ClosedRange&lt;Scalar&gt;, using: inout Generator, shape: BNNS.Shape, batchSize: Int) -&gt; BNNSNDArrayDescriptor</a>-3w6ig.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0021:0001">주어진 generator를 난수 소스로 사용해 지정된 범위 내에서 임의 값을 갖는 새 배열 디스크립터를 반환합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0022:0001"><a href="bnnsndarraydescriptor/allocate(repeating:shape:batchsize:">static func allocate&lt;T&gt;(repeating: T, shape: BNNS.Shape, batchSize: Int) -&gt; BNNSNDArrayDescriptor</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0023:0001">단일 스칼라 값이 반복되어 초기화된 새 n차원 배열 디스크립터를 반환합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0024:0001"><a href="bnnsndarraydescriptor/allocateuninitialized(scalartype:shape:batchsize:">static func allocateUninitialized(scalarType: any BNNSScalar.Type, shape: BNNS.Shape, batchSize: Int) -&gt; BNNSNDArrayDescriptor</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0025:0001">초기화되지 않은 메모리로 할당되는 새 n차원 배열 디스크립터를 반환합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0026:0001"><a href="bnnsndarraydescriptor/deallocate.md">func deallocate()</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0027:0001">이 n차원 배열 디스크립터에 이전에 할당된 메모리 블록을 해제합니다.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0029:0001">*<a href="https://developer.apple.com/documentation/accelerate/bnnsndarraydescriptor/allocate(randomin:shape:batchsize:">View on Apple Developer</a>-5a2p2)*</span>
