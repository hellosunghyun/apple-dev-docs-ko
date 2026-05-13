---
source_path: "documentation/Accelerate/kvimagedonotclamp.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/accelerate/kvimagedonotclamp"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:kvimagedonotclamp:0000:0001">kvImageDoNotClamp</span>

<span class="ko-segment" data-segment-id="seg:paragraph:kvimagedonotclamp:0001:0001">**Framework**: Accelerate **Kind**: var</span>

<span class="ko-segment" data-segment-id="seg:paragraph:kvimagedonotclamp:0002:0001">일부 부동소수점 형식 변환에서 클램핑을 비활성화하는 플래그입니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:kvimagedonotclamp:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:kvimagedonotclamp:0004:0001">iOS 9.3+</span>
- <span class="ko-segment" data-segment-id="seg:list:kvimagedonotclamp:0004:0002">iPadOS 9.3+</span>
- <span class="ko-segment" data-segment-id="seg:list:kvimagedonotclamp:0004:0003">Mac Catalyst 13.1+</span>
- <span class="ko-segment" data-segment-id="seg:list:kvimagedonotclamp:0004:0004">macOS 10.12+</span>
- <span class="ko-segment" data-segment-id="seg:list:kvimagedonotclamp:0004:0005">tvOS 9.2+</span>
- <span class="ko-segment" data-segment-id="seg:list:kvimagedonotclamp:0004:0006">visionOS 1.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:kvimagedonotclamp:0004:0007">watchOS 2.2+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
var kvImageDoNotClamp: Int { get }
```

#### <span class="ko-segment" data-segment-id="seg:heading:discussion:0007:0001">Discussion</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0008:0001">입력 데이터가 보존되어야 하는 <code>[0,1]</code> 범위를 벗어난 값을 포함하면 이 플래그를 사용합니다.</span>

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0009:0001">참고</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0010:0001"><a href="vimage/options.md">vImage.Options</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0011:0001">처리 옵션을 지정하려면 vImage 작업에 플래그를 설정합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0012:0001"><a href="kvimagenoflags.md">var kvImageNoFlags: Int</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0013:0001">동작을 기본값으로 설정하는 플래그입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0014:0001"><a href="kvimageleavealphaunchanged.md">var kvImageLeaveAlphaUnchanged: Int</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0015:0001">작업을 빨간색, 녹색, 파란색 채널에만 제한하는 플래그입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0016:0001"><a href="kvimagedonottile.md">var kvImageDoNotTile: Int</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0017:0001">vImage 내부 타일링 루틴을 비활성화하는 플래그입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0018:0001"><a href="kvimagehighqualityresampling.md">var kvImageHighQualityResampling: Int</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0019:0001">기하학 연산에 대해 더 높은 품질의 느린 리샘플링 필터를 사용하는 플래그입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0020:0001"><a href="kvimagegettempbuffersize.md">var kvImageGetTempBufferSize: Int</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0021:0001">주어진 매개변수를 바탕으로 작업의 최소 임시 버퍼 크기를 반환하는 플래그입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0022:0001"><a href="kvimageprintdiagnosticstoconsole.md">var kvImagePrintDiagnosticsToConsole: Int</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0023:0001">작업이 실패할 경우 디버그 메시지를 출력하는 플래그입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0024:0001"><a href="kvimagenoallocate.md">var kvImageNoAllocate: Int</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0025:0001">vImage가 추가 저장소를 할당하지 않도록 방지하는 플래그입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0026:0001"><a href="kvimagehdrcontent.md">var kvImageHDRContent: Int</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0027:0001">HDR 인식 메서드를 사용하는 플래그입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0028:0001"><a href="kvimageusefp16accumulator.md">var kvImageUseFP16Accumulator: Int</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0029:0001">vImage가 부동소수점 16비트 연산에서 더 빠르지만 정밀도가 낮은 내부 산술을 사용하도록 지정하는 플래그입니다.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0031:0001">*<a href="https://developer.apple.com/documentation/accelerate/kvimagedonotclamp">View on Apple Developer</a>*</span>
