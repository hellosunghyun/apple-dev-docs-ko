---
source_path: "documentation/AVFoundation/avassetreaderoutput/reset-forreadingtimeranges.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/avfoundation/avassetreaderoutput/reset-forreadingtimeranges"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:resetforreadingtimeranges:0000:0001">reset(forReadingTimeRanges:)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:resetforreadingtimeranges:0001:0001">**Framework**: AVFoundation **Kind**: method</span>

<span class="ko-segment" data-segment-id="seg:paragraph:resetforreadingtimeranges:0002:0001">새로운 시간 범위 집합으로 읽기를 다시 시작합니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:resetforreadingtimeranges:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:resetforreadingtimeranges:0004:0001">iOS 8.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:resetforreadingtimeranges:0004:0002">iPadOS 8.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:resetforreadingtimeranges:0004:0003">Mac Catalyst 13.1+</span>
- <span class="ko-segment" data-segment-id="seg:list:resetforreadingtimeranges:0004:0004">macOS 10.10+</span>
- <span class="ko-segment" data-segment-id="seg:list:resetforreadingtimeranges:0004:0005">tvOS 9.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:resetforreadingtimeranges:0004:0006">visionOS 1.0+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
func reset(forReadingTimeRanges timeRanges: [NSValue])
```

#### <span class="ko-segment" data-segment-id="seg:heading:discussion:0007:0001">Discussion</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0008:0001"><a href="avassetreaderoutput/supportsrandomaccess.md">@@TOKEN_0@@</a> 속성의 값이 <a href="https://developer.apple.com/documentation/Swift/true">@@TOKEN_1@@</a>인 경우에만 이 메서드를 호출할 수 있습니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:discussion:0008:0002"><a href="avassetreaderoutput/markconfigurationasfinal(">@@TOKEN_0@@</a>.md)을 호출한 후에는 이 메서드를 호출할 수 없습니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0009:0001">이 메서드를 호출하는 전형적인 시점은 <a href="avassetwriter.md">@@TOKEN_0@@</a> 인스턴스를 사용해 멀티 패스 인코딩을 수행할 때입니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:discussion:0009:0002">이 경우 <a href="avassetreaderoutput/copynextsamplebuffer(">@@TOKEN_0@@</a>.md) 메서드를 <code>nil</code>이 반환될 때까지 호출한 다음, 에셋 작성기의 입력에서 다시 인코딩할 시간 범위 집합을 요청합니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:discussion:0009:0003">다음 패스의 출력을 준비하려면 이 메서드에 시간 범위를 전달합니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0010:0001">여기에 설정한 시간 범위는 에셋 리더의 <a href="avassetreader/timerange.md">@@TOKEN_0@@</a> 속성 값을 덮어씁니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:discussion:0010:0002">배열에 포함된 시간 범위의 시작 시간이 엄격히 증가하지 않거나 두 개 이상의 시간 범위가 서로 겹치면 시스템에서 예외를 throw합니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:discussion:0010:0003">지속 시간이 <a href="https://developer.apple.com/documentation/CoreMedia/CMTime/positiveInfinity">@@TOKEN_0@@</a>가 아닌 경우 시작 시간 또는 지속 시간이 비수치값인 시간 범위를 포함하면 오류입니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0011:0001">에셋 리더가 <a href="avassetreader/status-swift.enum/failed.md">@@TOKEN_0@@</a> 또는 <a href="avassetreader/status-swift.enum/cancelled.md">@@TOKEN_1@@</a> 상태일 때 이 메서드를 호출하면, <a href="avassetreader/status-swift.property.md">@@TOKEN_2@@</a> 속성 값은 변경되지 않으며 다음 <a href="avassetreaderoutput/copynextsamplebuffer(">@@TOKEN_3@@</a>.md) 호출 결과는 <code>nil</code>입니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0012:0001">읽을 미디어 데이터가 아직 남아 있는 상태에서 이 메서드를 호출하면 시스템에서 예외가 발생합니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:discussion:0012:0002">에셋 리더가 읽기를 시작한 후에만 호출할 수 있습니다.</span>

## <span class="ko-segment" data-segment-id="seg:heading:parameters:0013:0001">Parameters</span>

- <span class="ko-segment" data-segment-id="seg:list:parameters:0014:0001"><code>timeRanges</code>: 단일 <a href="https://developer.apple.com/documentation/CoreMedia/CMTimeRange">@@TOKEN_1@@</a> 구조를 각각 나타내는 <a href="https://developer.apple.com/documentation/Foundation/NSValue">@@TOKEN_2@@</a> 객체 배열입니다.</span>

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0015:0001">관련 항목</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0016:0001"><a href="avassetreaderoutput/alwayscopiessampledata.md">var alwaysCopiesSampleData: Bool</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0017:0001">출력이 복사된 샘플 데이터를 제공하는지 나타내는 부울 값입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0018:0001"><a href="avassetreaderoutput/supportsrandomaccess.md">var supportsRandomAccess: Bool</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0019:0001">출력이 읽는 시간 범위를 다시 구성할 수 있는지 여부를 나타내는 부울 값입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0020:0001"><a href="avassetreaderoutput/markconfigurationasfinal.md">func markConfigurationAsFinal()</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0021:0001">출력에 시간 범위 재구성이 완료되었음을 알리고 에셋 리더가 완료 상태로 진행할 수 있도록 합니다.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0023:0001">*<a href="https://developer.apple.com/documentation/avfoundation/avassetreaderoutput/reset(forreadingtimeranges:">View on Apple Developer</a>)*</span>
