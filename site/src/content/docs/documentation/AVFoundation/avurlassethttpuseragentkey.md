---
source_path: "documentation/AVFoundation/avurlassethttpuseragentkey.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/avfoundation/avurlassethttpuseragentkey"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:avurlassethttpuseragentkey:0000:0001">AVURLAssetHTTPUserAgentKey</span>

<span class="ko-segment" data-segment-id="seg:paragraph:avurlassethttpuseragentkey:0001:0001">**Framework**: AVFoundation **Kind**: var</span>

<span class="ko-segment" data-segment-id="seg:paragraph:avurlassethttpuseragentkey:0002:0001">A key that specifies the user agent of requests that an asset makes.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:avurlassethttpuseragentkey:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:avurlassethttpuseragentkey:0004:0001">iOS 16.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:avurlassethttpuseragentkey:0004:0002">iPadOS 16.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:avurlassethttpuseragentkey:0004:0003">Mac Catalyst 16.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:avurlassethttpuseragentkey:0004:0004">macOS 13.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:avurlassethttpuseragentkey:0004:0005">tvOS 16.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:avurlassethttpuseragentkey:0004:0006">visionOS 1.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:avurlassethttpuseragentkey:0004:0007">watchOS 9.0+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
let AVURLAssetHTTPUserAgentKey: String
```

#### <span class="ko-segment" data-segment-id="seg:heading:discussion:0007:0001">Discussion</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0008:0001">Use this key to set a custom <code>User-Agent</code> header on requests that this asset makes.</span> <span class="ko-segment" data-segment-id="seg:paragraph:discussion:0008:0002">The system uses its default user agent if you don’t specify a value.</span>

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0009:0001">See Also</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0010:0001"><a href="avurlassetallowscellularaccesskey.md">let AVURLAssetAllowsCellularAccessKey: String</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0011:0001">A Boolean value that indicates whether the system can make network requests on behalf of the asset when connected to a cellular network.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0012:0001"><a href="avurlassetallowsconstrainednetworkaccesskey.md">let AVURLAssetAllowsConstrainedNetworkAccessKey: String</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0013:0001">A Boolean value that indicates whether the system allows network requests on behalf of this asset to use the constrained interface.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0014:0001"><a href="avurlassetallowsexpensivenetworkaccesskey.md">let AVURLAssetAllowsExpensiveNetworkAccessKey: String</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0015:0001">A Boolean value that indicates whether the system allows network requests on behalf of this asset to use the expensive interface.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0016:0001"><a href="avurlassethttpcookieskey.md">let AVURLAssetHTTPCookiesKey: String</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0017:0001">The HTTP cookies that a URL asset may send with HTTP requests.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0018:0001"><a href="avurlassetoverridemimetypekey.md">let AVURLAssetOverrideMIMETypeKey: String</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0019:0001">이 앱은 미디어를 재생할 권한이 없습니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0020:0001"><a href="avurlassetpreferprecisedurationandtimingkey.md">let AVURLAssetPreferPreciseDurationAndTimingKey: String</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0021:0001">컴포지션은 공백이 있어 소스 미디어를 추가할 수 없습니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0022:0001"><a href="avurlassetprimarysessionidentifierkey.md">let AVURLAssetPrimarySessionIdentifierKey: String</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0023:0001">사용자는 미디어를 재생할 권한이 없습니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0024:0001"><a href="avurlassetreferencerestrictionskey.md">let AVURLAssetReferenceRestrictionsKey: String</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0025:0001">이 앱은 미디어를 열 권한이 없습니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0026:0001"><a href="avurlassetshouldsupportaliasdatareferenceskey.md">let AVURLAssetShouldSupportAliasDataReferencesKey: String</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0027:0001">캡처한 콘텐츠를 사용할 수 없습니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0028:0001"><a href="avurlasseturlrequestattributionkey.md">let AVURLAssetURLRequestAttributionKey: String</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0029:0001">앱이 콘텐츠 키 검색 요청을 취소했습니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0030:0001"><a href="avurlassetshouldparseexternalsphericaltagskey.md">let AVURLAssetShouldParseExternalSphericalTagsKey: String</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0031:0001">시스템이 캡처한 콘텐츠를 업데이트할 수 없었습니다.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0033:0001">*<a href="https://developer.apple.com/documentation/avfoundation/avurlassethttpuseragentkey">View on Apple Developer</a>*</span>
