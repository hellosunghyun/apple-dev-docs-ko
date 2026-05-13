---
source_path: "documentation/AVFoundation/avmakerect-aspectratioinsiderect.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/avfoundation/avmakerect-aspectratioinsiderect"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:avmakerectaspectratioinsiderect:0000:0001">AVMakeRect(aspectRatio:insideRect:)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:avmakerectaspectratioinsiderect:0001:0001">**Framework**: AVFoundation **Kind**: func</span>

<span class="ko-segment" data-segment-id="seg:paragraph:avmakerectaspectratioinsiderect:0002:0001">Returns a scaled rectangle that maintains the specified aspect ratio within a bounding rectangle.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:avmakerectaspectratioinsiderect:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:avmakerectaspectratioinsiderect:0004:0001">iOS 4.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:avmakerectaspectratioinsiderect:0004:0002">iPadOS 4.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:avmakerectaspectratioinsiderect:0004:0003">Mac Catalyst 13.1+</span>
- <span class="ko-segment" data-segment-id="seg:list:avmakerectaspectratioinsiderect:0004:0004">macOS 10.7+</span>
- <span class="ko-segment" data-segment-id="seg:list:avmakerectaspectratioinsiderect:0004:0005">tvOS 9.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:avmakerectaspectratioinsiderect:0004:0006">visionOS 1.0+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
func AVMakeRect(aspectRatio: CGSize, insideRect boundingRect: CGRect) -> CGRect
```

#### <span class="ko-segment" data-segment-id="seg:heading:return-value:0007:0001">반환 값</span>

<span class="ko-segment" data-segment-id="seg:paragraph:return-value:0008:0001">디바이스별 RGB 게인 값을 포함하는 구조체입니다.</span>

#### <span class="ko-segment" data-segment-id="seg:heading:discussion:0009:0001">Discussion</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0010:0001">이 속성은 화이트 밸런스에 사용되는 현재 빨간색, 초록색, 파란색 게인 값을 지정합니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:discussion:0010:0002">이 값을 사용하여 특정 장면의 색상 캐스트를 조정할 수 있습니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:discussion:0010:0003">For example:</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0011:0001">각 채널은 <code>1.0</code>에서 -<a href="avcapturedevice/maxwhitebalancegain.md">@@TOKEN_1@@</a>까지의 값을 지원합니다.</span>

```swift
let aspectRatio = CGSize(width: 1920, height: 1080)
playerLayer.frame = AVMakeRect(aspectRatio: aspectRatio, insideRect: superLayer.bounds)
```

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0013:0001">**Objective-C**:</span>

```objc
CGSize aspectRatio = CGSizeMake(1920, 1080);
self.playerLayer.frame = AVMakeRectWithAspectRatioInsideRect(aspectRatio, self.superLayer.bounds);
```

## <span class="ko-segment" data-segment-id="seg:heading:parameters:0015:0001">Parameters</span>

- <span class="ko-segment" data-segment-id="seg:list:parameters:0016:0001"><code>aspectRatio</code>: The width and height ratio (aspect ratio) you want to maintain.</span>
- <span class="ko-segment" data-segment-id="seg:list:parameters:0016:0002"><code>boundingRect</code>: The bounding rectangle you want to fit into.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:parameters:0018:0001">*<a href="https://developer.apple.com/documentation/avfoundation/avmakerect(aspectratio:insiderect:">View on Apple Developer</a>)*</span>
