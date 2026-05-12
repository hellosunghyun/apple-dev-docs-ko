---
source_path: "documentation/Accelerate/bnnsfilterparameters/allocator.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/accelerate/bnnsfilterparameters/allocator"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:allocator:0000:0001">allocator</span>

<span class="ko-segment" data-segment-id="seg:paragraph:allocator:0001:0001">**Framework**: Accelerate **Kind**: property</span>

<span class="ko-segment" data-segment-id="seg:paragraph:allocator:0002:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:allocator:0003:0001">iOS 15.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:allocator:0003:0002">iPadOS 15.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:allocator:0003:0003">Mac Catalyst ?+</span>
- <span class="ko-segment" data-segment-id="seg:list:allocator:0003:0004">macOS 12.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:allocator:0003:0005">tvOS 15.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:allocator:0003:0006">visionOS ?+</span>
- <span class="ko-segment" data-segment-id="seg:list:allocator:0003:0007">watchOS 8.0+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0004:0001">Declaration</span>

```swift
var allocator: BNNSAlloc? { get set }
```

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0006:0001">참고 항목</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0007:0001"><a href="bnnsfilterparameters/flags.md">var flags: UInt32</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0008:0001">BNNS flags의 값 0개 이상에 대한 논리 OR 결과입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0009:0001"><a href="bnnsfilterparameters/n_threads.md">var n_threads: Int</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0010:0001">실행할 작업자 스레드 수입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0011:0001"><a href="bnnsfilterparameters/alloc_memory.md">var alloc_memory: BNNSAlloc?</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0012:0001">메모리를 할당하기 위해 호출되는 함수입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0013:0001"><a href="bnnsfilterparameters/free_memory.md">var free_memory: BNNSFree?</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0014:0001">메모리를 해제하기 위해 호출되는 함수입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0015:0001"><a href="bnnsfilterparameters/deallocator.md">var deallocator: BNNSFree?</a></span>
- <span class="ko-segment" data-segment-id="seg:list:see-also:0015:0002"><a href="bnnsfilterparameters/options.md">var options: BNNSFlags</a></span>
- <span class="ko-segment" data-segment-id="seg:list:see-also:0015:0003"><a href="bnnsfilterparameters/threadcount.md">var threadCount: Int</a></span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0017:0001">*<a href="https://developer.apple.com/documentation/accelerate/bnnsfilterparameters/allocator">View on Apple Developer</a>*</span>
