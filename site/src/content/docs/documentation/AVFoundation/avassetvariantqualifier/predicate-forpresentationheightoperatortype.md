---
source_path: "documentation/AVFoundation/avassetvariantqualifier/predicate-forpresentationheightoperatortype.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/avfoundation/avassetvariantqualifier/predicate-forpresentationheightoperatortype"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:predicateforpresentationheightoperatortype:0000:0001">predicate(forPresentationHeight:operatorType:)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:predicateforpresentationheightoperatortype:0001:0001">**Framework**: AVFoundation **Kind**: method</span>

<span class="ko-segment" data-segment-id="seg:paragraph:predicateforpresentationheightoperatortype:0002:0001">높이와 연산자 타입으로 조건식을 생성합니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:predicateforpresentationheightoperatortype:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:predicateforpresentationheightoperatortype:0004:0001">iOS 15.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:predicateforpresentationheightoperatortype:0004:0002">iPadOS 15.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:predicateforpresentationheightoperatortype:0004:0003">Mac Catalyst 15.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:predicateforpresentationheightoperatortype:0004:0004">macOS 12.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:predicateforpresentationheightoperatortype:0004:0005">tvOS 15.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:predicateforpresentationheightoperatortype:0004:0006">visionOS 1.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:predicateforpresentationheightoperatortype:0004:0007">watchOS 10.0+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
class func predicate(forPresentationHeight height: CGFloat, operatorType: NSComparisonPredicate.Operator) -> NSPredicate
```

#### <span class="ko-segment" data-segment-id="seg:heading:return-value:0007:0001">반환 값</span>

<span class="ko-segment" data-segment-id="seg:paragraph:return-value:0008:0001"><a href="avassetvariantqualifier.md">@@TOKEN_0@@</a>를 생성할 때 사용하는 조건식 객체입니다.</span>

## <span class="ko-segment" data-segment-id="seg:heading:parameters:0009:0001">Parameters</span>

- <span class="ko-segment" data-segment-id="seg:list:parameters:0010:0001"><code>height</code>: 프레젠테이션 높이입니다.</span>
- <span class="ko-segment" data-segment-id="seg:list:parameters:0010:0002"><code>operatorType</code>: 조건식의 연산자 타입입니다.</span>

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0011:0001">참고 항목</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0012:0001"><a href="avassetvariantqualifier/predicate(foraudiosamplerate:mediaselectionoption:operatortype:">class func predicate(forAudioSampleRate: Double, mediaSelectionOption: AVMediaSelectionOption?, operatorType: NSComparisonPredicate.Operator) -&gt; NSPredicate</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0013:0001">오디오 샘플 레이트를 위한 조건식을 생성합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0014:0001"><a href="avassetvariantqualifier/predicate(foraudiosamplerate:operatortype:">class func predicate(forAudioSampleRate: Double, operatorType: NSComparisonPredicate.Operator) -&gt; NSPredicate</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0015:0001">다른 NSPredicate와 함께 사용해 변형 선호도를 표현할 수 있는 오디오 샘플 레이트용 NSPredicate를 생성합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0016:0001"><a href="avassetvariantqualifier/predicate(forbinauralaudio:">class func predicate(forBinauralAudio: Bool) -&gt; NSPredicate</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0017:0001">바이노럴 오디오를 위한 NSPredicate를 생성하며, 다른 NSPredicate와 함께 사용해 변형 선호도를 표현할 수 있습니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0018:0001"><a href="avassetvariantqualifier/predicate(forbinauralaudio:mediaselectionoption:">class func predicate(forBinauralAudio: Bool, mediaSelectionOption: AVMediaSelectionOption?) -&gt; NSPredicate</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0019:0001">바이노럴 오디오용 조건식을 생성합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0020:0001"><a href="avassetvariantqualifier/predicate(forchannelcount:mediaselectionoption:operatortype:">class func predicate(forChannelCount: Int, mediaSelectionOption: AVMediaSelectionOption?, operatorType: NSComparisonPredicate.Operator) -&gt; NSPredicate</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0021:0001">*<a href="https://developer.apple.com/documentation/avfoundation/avassetwriter/flushsegment(">View on Apple Developer</a>)*</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0022:0001"><a href="avassetvariantqualifier/predicate(forchannelcount:operatortype:">class func predicate(forChannelCount: Int, operatorType: NSComparisonPredicate.Operator) -&gt; NSPredicate</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0023:0001">오디오 채널 수에 대한 NSPredicate를 생성하며, 다른 NSPredicate와 함께 사용해 variant 선호도를 표현할 수 있습니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0024:0001"><a href="avassetvariantqualifier/predicate(fordownmixaudio:">class func predicate(forDownmixAudio: Bool) -&gt; NSPredicate</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0025:0001">몰입형 오디오에 대한 NSPredicate를 생성하며, 다른 NSPredicate와 함께 사용해 variant 선호도를 표현할 수 있습니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0026:0001"><a href="avassetvariantqualifier/predicate(fordownmixaudio:mediaselectionoption:">class func predicate(forDownmixAudio: Bool, mediaSelectionOption: AVMediaSelectionOption?) -&gt; NSPredicate</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0027:0001">다운믹스 오디오용 NSPredicate를 생성합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0028:0001"><a href="avassetvariantqualifier/predicate(forimmersiveaudio:">class func predicate(forImmersiveAudio: Bool) -&gt; NSPredicate</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0029:0001">다른 NSPredicate와 함께 사용해 variant 선호도를 표현할 수 있는 몰입형 오디오용 NSPredicate를 생성합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0030:0001"><a href="avassetvariantqualifier/predicate(forimmersiveaudio:mediaselectionoption:">class func predicate(forImmersiveAudio: Bool, mediaSelectionOption: AVMediaSelectionOption?) -&gt; NSPredicate</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0031:0001">미디어 선택 옵션이 지정된 몰입형 오디오용 predicate를 생성합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0032:0001"><a href="avassetvariantqualifier/predicate(forpresentationwidth:operatortype:">class func predicate(forPresentationWidth: CGFloat, operatorType: NSComparisonPredicate.Operator) -&gt; NSPredicate</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0033:0001">가로 쓰기 모드에서 너비와 연산자 유형을 사용해 predicate를 생성합니다.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0035:0001">*<a href="https://developer.apple.com/documentation/avfoundation/avassetvariantqualifier/predicate(forpresentationheight:operatortype:">Apple Developer에서 보기</a>)*</span>
