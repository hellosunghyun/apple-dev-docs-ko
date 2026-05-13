---
source_path: "documentation/AVFoundation/avsamplecursor/maysampleswithlaterdecodetimestampshavepresentationtimestamps-earlierthan.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/avfoundation/avsamplecursor/maysampleswithlaterdecodetimestampshavepresentationtimestamps-earlierthan"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:maysampleswithlaterdecodetimestampshavepresentationtimestampsearlierthan:0000:0001">maySamplesWithLaterDecodeTimeStampsHavePresentationTimeStamps(earlierThan:)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:maysampleswithlaterdecodetimestampshavepresentationtimestampsearlierthan:0001:0001">**Framework**: AVFoundation **Kind**: method</span>

<span class="ko-segment" data-segment-id="seg:paragraph:maysampleswithlaterdecodetimestampshavepresentationtimestampsearlierthan:0002:0001">지정된 샘플 커서보다 표시 타임스탬프가 더 이른 값을, 디코드 순서가 더 뒤인 샘플이 가질 수 있는지 여부를 결정합니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:maysampleswithlaterdecodetimestampshavepresentationtimestampsearlierthan:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:maysampleswithlaterdecodetimestampshavepresentationtimestampsearlierthan:0004:0001">iOS 16.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:maysampleswithlaterdecodetimestampshavepresentationtimestampsearlierthan:0004:0002">iPadOS 16.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:maysampleswithlaterdecodetimestampshavepresentationtimestampsearlierthan:0004:0003">Mac Catalyst 16.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:maysampleswithlaterdecodetimestampshavepresentationtimestampsearlierthan:0004:0004">macOS 10.10+</span>
- <span class="ko-segment" data-segment-id="seg:list:maysampleswithlaterdecodetimestampshavepresentationtimestampsearlierthan:0004:0005">tvOS 16.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:maysampleswithlaterdecodetimestampshavepresentationtimestampsearlierthan:0004:0006">visionOS 1.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:maysampleswithlaterdecodetimestampshavepresentationtimestampsearlierthan:0004:0007">watchOS 9.0+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
func maySamplesWithLaterDecodeTimeStampsHavePresentationTimeStamps(earlierThan cursor: AVSampleCursor) -> Bool
```

#### <span class="ko-segment" data-segment-id="seg:heading:return-value:0007:0001">반환 값</span>

<span class="ko-segment" data-segment-id="seg:paragraph:return-value:0008:0001">수신기 위치의 샘플보다 디코드 순서상 뒤에 있는 임의의 샘플이 지정된 샘플 커서보다 이른 표시 타임스탬프를 가질 수 있으면 <a href="https://developer.apple.com/documentation/Swift/true">@@TOKEN_0@@</a>이고, 그렇지 않으면 <a href="https://developer.apple.com/documentation/Swift/false">@@TOKEN_1@@</a>입니다.</span>

#### <span class="ko-segment" data-segment-id="seg:heading:discussion:0009:0001">Discussion</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0010:0001">이 커서와 전달된 커서가 서로 다른 샘플 시퀀스를 참조하는 경우(예: 서로 다른 <a href="avassettrack.md">@@TOKEN_0@@</a> 인스턴스에서 생성된 경우) 결과가 정의되지 않습니다.</span>

## <span class="ko-segment" data-segment-id="seg:heading:parameters:0011:0001">Parameters</span>

- <span class="ko-segment" data-segment-id="seg:list:parameters:0012:0001"><code>cursor</code>: 샘플 재정렬 경계를 검사할 때 사용할 <code>AVSampleCursor</code> 인스턴스입니다.</span>

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0013:0001">참고</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0014:0001"><a href="avsamplecursor/maysampleswithearlierdecodetimestampshavepresentationtimestamps(laterthan:">func maySamplesWithEarlierDecodeTimeStampsHavePresentationTimeStamps(laterThan: AVSampleCursor) -&gt; Bool</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0015:0001">디코드 순서가 더 앞선 샘플이 지정된 샘플 커서의 표시 타임스탬프보다 나중의 표시 타임스탬프를 가질 수 있는지 결정합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0016:0001"><a href="avsamplecursor/samplesrequiredfordecoderrefresh.md">var samplesRequiredForDecoderRefresh: Int</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0017:0001">현재 디코드 시점에서 일관된 출력을 얻기 위해 디코더가 현재 샘플 이전에 필요로 하는 샘플 수입니다.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0019:0001">*<a href="https://developer.apple.com/documentation/avfoundation/avsamplecursor/maysampleswithlaterdecodetimestampshavepresentationtimestamps(earlierthan:">Apple Developer에서 보기</a>)*</span>
