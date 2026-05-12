---
source_path: "documentation/AVFoundation/avassetvariantqualifier/predicate-forchannelcountoperatortype.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/avfoundation/avassetvariantqualifier/predicate-forchannelcountoperatortype"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:predicateforchannelcountoperatortype:0000:0001">predicate(forChannelCount:operatorType:)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:predicateforchannelcountoperatortype:0001:0001">**Framework**: AVFoundation **Kind**: method</span>

<span class="ko-segment" data-segment-id="seg:paragraph:predicateforchannelcountoperatortype:0002:0001">오디오 채널 수에 대한 NSPredicate를 생성하며, 다른 NSPredicate와 함께 사용해 변형 선호도를 표현할 수 있습니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:predicateforchannelcountoperatortype:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:predicateforchannelcountoperatortype:0004:0001">iOS 18.5+</span>
- <span class="ko-segment" data-segment-id="seg:list:predicateforchannelcountoperatortype:0004:0002">iPadOS 18.5+</span>
- <span class="ko-segment" data-segment-id="seg:list:predicateforchannelcountoperatortype:0004:0003">Mac Catalyst 18.5+</span>
- <span class="ko-segment" data-segment-id="seg:list:predicateforchannelcountoperatortype:0004:0004">macOS 15.5+</span>
- <span class="ko-segment" data-segment-id="seg:list:predicateforchannelcountoperatortype:0004:0005">tvOS 18.5+</span>
- <span class="ko-segment" data-segment-id="seg:list:predicateforchannelcountoperatortype:0004:0006">visionOS 2.5+</span>
- <span class="ko-segment" data-segment-id="seg:list:predicateforchannelcountoperatortype:0004:0007">watchOS 11.5+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
class func predicate(forChannelCount channelCount: Int, operatorType: NSComparisonPredicate.Operator) -> NSPredicate
```

#### <span class="ko-segment" data-segment-id="seg:heading:discussion:0007:0001">Discussion</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0008:0001">이 Predicate는 자산에 대해 선택된 미디어 선택 옵션에서 평가됩니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:discussion:0008:0002">기본 자산의 미디어 선택 옵션은 AVAssetDownloadConfiguration의 mediaSelections 속성에서 지정할 수 있습니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:discussion:0008:0003">삽입 자산의 미디어 선택 옵션은 -[AVAssetDownloadConfiguration setInterstitialMediaSelectionCriteria: forMediaCharacteristic:]로 제한될 수 있습니다.</span>

## <span class="ko-segment" data-segment-id="seg:heading:parameters:0009:0001">Parameters</span>

- <span class="ko-segment" data-segment-id="seg:list:parameters:0010:0001"><code>channelCount</code>: Predicate 방정식에서 채널 수의 RHS 값입니다.</span>
- <span class="ko-segment" data-segment-id="seg:list:parameters:0010:0002"><code>operatorType</code>: 유효한 값은 NSLessThanPredicateOperatorType, NSLessThanOrEqualToPredicateOperatorType, NSGreaterThanPredicateOperatorType, NSGreaterThanOrEqualToPredicateOperatorType, NSEqualToPredicateOperatorType 및 NSNotEqualToPredicateOperatorType입니다.</span>

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0011:0001">참고 항목</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0012:0001"><a href="avassetvariantqualifier/predicate(foraudiosamplerate:mediaselectionoption:operatortype:">class func predicate(forAudioSampleRate: Double, mediaSelectionOption: AVMediaSelectionOption?, operatorType: NSComparisonPredicate.Operator) -&gt; NSPredicate</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0013:0001">오디오 샘플 레이트에 대한 predicate를 생성합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0014:0001"><a href="avcapturedevice/format/secondarynativeresolutionzoomfactors.md">class func predicate(forAudioSampleRate: Double, operatorType: NSComparisonPredicate.Operator) -&gt; NSPredicate</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0015:0001">다른 NSPredicate와 함께 사용하여 변형 선호도를 표현할 수 있는 오디오 샘플 레이트용 NSPredicate를 생성합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0016:0001"><a href="avcapturedevice/isflashmodesupported(_:">class func predicate(forBinauralAudio: Bool) -&gt; NSPredicate</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0017:0001">다른 NSPredicate와 함께 사용해 변형 선호도를 표현할 수 있는 바이노럴 오디오용 NSPredicate를 생성합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0018:0001"><a href="avassetvariantqualifier/predicate(forbinauralaudio:mediaselectionoption:">class func predicate(forBinauralAudio: Bool, mediaSelectionOption: AVMediaSelectionOption?) -&gt; NSPredicate</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0019:0001">바이노럴 오디오에 대한 predicate를 생성합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0020:0001"><a href="avassetvariantqualifier/predicate(forchannelcount:mediaselectionoption:operatortype:">class func predicate(forChannelCount: Int, mediaSelectionOption: AVMediaSelectionOption?, operatorType: NSComparisonPredicate.Operator) -&gt; NSPredicate</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0021:0001">채널 수, 미디어 선택 옵션 및 연산자 유형이 포함된 predicate를 생성합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0022:0001"><a href="avassetvariantqualifier/predicate(fordownmixaudio:">class func predicate(forDownmixAudio: Bool) -&gt; NSPredicate</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0023:0001">다른 NSPredicate와 함께 사용해 변형 선호도를 표현할 수 있는 몰입형 오디오용 NSPredicate를 생성합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0024:0001"><a href="avassetvariantqualifier/predicate(fordownmixaudio:mediaselectionoption:">class func predicate(forDownmixAudio: Bool, mediaSelectionOption: AVMediaSelectionOption?) -&gt; NSPredicate</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0025:0001">다운믹스 오디오에 대한 predicate를 생성합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0026:0001"><a href="avassetvariantqualifier/predicate(forimmersiveaudio:">class func predicate(forImmersiveAudio: Bool) -&gt; NSPredicate</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0027:0001">다른 NSPredicate와 함께 사용해 변형 선호도를 표현할 수 있는 몰입형 오디오용 NSPredicate를 생성합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0028:0001"><a href="avassetvariantqualifier/predicate(forimmersiveaudio:mediaselectionoption:">class func predicate(forImmersiveAudio: Bool, mediaSelectionOption: AVMediaSelectionOption?) -&gt; NSPredicate</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0029:0001">몰입형 오디오에 대한 predicate를 생성합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0030:0001"><a href="avassetvariantqualifier/predicate(forpresentationheight:operatortype:">class func predicate(forPresentationHeight: CGFloat, operatorType: NSComparisonPredicate.Operator) -&gt; NSPredicate</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0031:0001">높이와 연산자 유형이 포함된 predicate를 생성합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0032:0001"><a href="avassetvariantqualifier/predicate(forpresentationwidth:operatortype:">class func predicate(forPresentationWidth: CGFloat, operatorType: NSComparisonPredicate.Operator) -&gt; NSPredicate</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0033:0001">너비와 연산자 유형이 포함된 predicate를 생성합니다.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0035:0001">*<a href="https://developer.apple.com/documentation/avfoundation/avassetvariantqualifier/predicate(forchannelcount:operatortype:">View on Apple Developer</a>)*</span>
